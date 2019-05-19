import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NumberRows from './components/NumberRows';
import ResultScreen from './components/ResultScreen';
import CalculationsScreen from './components/CalculationsScreen';
import OperationsColumn from './components/OperationsColumn';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
      calculationText: '',
      calculationActive: false
    }
    this.operations = ['DEL', 'C', '+', '-', '*', '/'];

    this.buttonPressed = this.buttonPressed.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.operate = this.operate.bind(this);
    this.validate = this.validate.bind(this);
  }

  calculateResult() {
    const text = this.state.resultText;
    this.setState({
      calculationText: eval(text)
    })
  }

  validate() {
    const text = this.state.resultText;
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
      default: 
        this.setState({calculationActive: true})
        return true;
    }
  }

  buttonPressed(text) {
    if (text === '=') {
      return this.validate() && this.calculateResult();
    }

    if (this.state.calculationActive) {
      this.setState({calculationActive: false})
    }

    if (text === '.' && this.singleDecimalCheck(this.state.resultText)) {
      return; 
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  singleDecimalCheck(value) {
    let textValueArray = value.split(/\+|\-|\*|\//);
    if (textValueArray[textValueArray.length - 1].includes('.')) {
      return true;
    }
    return false;
  }

  operate(operation) {
    if (this.state.calculationActive) {
      this.setState({calculationActive: false})
    }
    switch(operation) {
      case 'DEL':
        this.setState({resultText: this.state.resultText.slice(0, -1)});
        break;
      case 'C':
        this.setState({resultText: '', calculationText: ''});
        break;
      case '+': 
      case '-': 
      case '*': 
      case '/': 
        if (this.operations.indexOf(this.state.resultText.slice(-1)) > 0) return;
        if (this.state.resultText === '') return;
        this.setState({
          resultText: this.state.resultText + operation
        })
        break;
    }
  }

  render() {
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.', 0, '=']];
    const {calculationActive, calculationText, resultText} = this.state;
    return (
      <View style={styles.container}>

        <CalculationsScreen />
        {/* <View style={[styles.result, calculationActive && {display: 'none'}]}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View> */}
        
        <ResultScreen />
        {/* <View style={calculationActive ? styles.calculationActive : styles.calculation}>
          <Text style={calculationActive ? styles.calculationTextActive : styles.calculationText}>{calculationText}</Text>
        </View> */}
        
        <View style={styles.buttons}>
          <NumberRows numbers={nums} buttonPressed={this.buttonPressed} />
          <OperationsColumn operations={this.operations} operate={this.operate} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // result: {
  //   flex: 2, 
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'flex-end'
  // },
  // resultActive: {
  //   flex: 0
  // },
  // resultText: {
  //   fontSize: 30,
  //   color: 'black'
  // },
  // calculationText: {
  //   fontSize: 24,
  //   color: '#aaa'
  // },
  // calculationTextActive: {
  //   fontSize: 54,
  //   color: 'black'
  // },
  // calculationActive: {
  //   flex: 3,
  //   justifyContent: 'center',
  //   alignItems: 'flex-end'
  // },
  // calculation: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'flex-end'
  // }, 
  buttons: {
    flex: 7,
    flexDirection: 'row'
  }
});
