import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NumberRows from './src/components/NumberRows';
import OperationsColumn from './src/components/OperationsColumn';
// import console = require('console');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
      calculationText: ''
    }
    this.operations = ['DEL', '+', '-', '*', '/'];

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
        return true;
    }
  }

  buttonPressed(text) {
    if (text === '=') {
      return this.validate() && this.calculateResult();
    }

    this.setState({
      resultText: this.state.resultText+text
    })

  }

  operate(operation) {
    switch(operation) {
      case 'DEL':
        this.setState({resultText: this.state.resultText.slice(0, -1)});
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

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>

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
  resultText: {
    fontSize: 30,
    color: 'black'
  },
  calculationText: {
    fontSize: 24,
    color: '#aaa'
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, 
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343'
  }
});
