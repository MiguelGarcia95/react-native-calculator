import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    let rows = [];
    let nums = [0 , 0, '='];
    for(let i = 0; i < 4; i++) {
      let row = [];
      for(let j = 0; j < 3; j++) {
        if (i !== 3) {
          row.push(
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>{i*3 + j + 1}</Text>
            </TouchableOpacity>
          )
        } else {
          row.push(
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>{nums[j]}</Text>
            </TouchableOpacity>
          )
        }
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            <Button title='+' />
            <Button title='+' />
            <Button title='+' />
            <Button title='+' />
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
