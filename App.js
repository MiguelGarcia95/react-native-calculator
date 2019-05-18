import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: ''
    }

    this.buttonPressed = this.buttonPressed.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.operate = this.operate.bind(this);
  }

  calculateResult() {
    const text = this.state.resultText;
    //parse text
  }

  buttonPressed(text) {
    if (text === '=') {
      return this.calculateResult();
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation) {
    switch(operation) {
      case 'DEL':
        let text = this.state.resultText.slice(0, -1);
        this.setState({resultText: text});
        break;
      case '+': 
      case '-': 
      case '*': 
      case '/': 
        if (this.state.resultText === '') return;
        this.setState({
          resultText: this.state.resultText + operation
        })
        break;
    }
  }

  render() {
    let rows = [];
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.', 0, '=']];
    for(let i = 0; i < 4; i++) {
      let row = [];
      for(let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btntext}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View key={nums[i][0]} style={styles.row}>{row}</View>)
    }

    let operations = ['DEL', '+', '-', '*', '/'];
    let ops = [];
    for(let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity key={operations[i]}  style={styles.btn} onPress={() => this.operate(operations[i])}>
          <Text style={[styles.btntext, styles.white]}>{operations[i] }</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
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
    color: 'white'
  },
  white: {
    color: 'white'
  },
  btntext: {
    fontSize: 30
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, 
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
    alignItems: 'stretch',
  }
});
