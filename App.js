import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}></View>
        <View style={styles.calculation}></View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
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
            <View style={styles.row}>
              <Button title='0' />
              <Button title='1' />
              <Button title='2' />
            </View>
          </View>
          <View style={styles.operations}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
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
    backgroundColor: 'black'
  }
});
