import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
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
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Button title='0' />
              <Button title='1' />
              <Button title='2' />
            </View>
            <View style={styles.row}>
              <Button title='0' />
              <Button title='1' />
              <Button title='2' />
            </View>
            <View style={styles.row}>
              <Button title='0' />
              <Button title='1' />
              <Button title='2' />
            </View>
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
