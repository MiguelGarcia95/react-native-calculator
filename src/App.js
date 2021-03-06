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
    this.setState({
      calculationText: eval(this.state.resultText)
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
      case '-':
        if (this.state.resultText.slice(-1) === '-') return;
        this.setState({
          resultText: this.state.resultText + operation
        })
        break;
      case '+': 
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
        <CalculationsScreen resultText={resultText} active={calculationActive} />
        <ResultScreen calculationText={calculationText} active={calculationActive} />
        
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
  buttons: {
    flex: 7,
    flexDirection: 'row'
  }
});
