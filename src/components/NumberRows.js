import React from 'react'
import { Text, View } from 'react-native';
import NumberRow from './NumberRow';

const displayRows = (numbers, buttonPressed) => {
  return numbers.map(number => {
    return <NumberRow key={number} numbers={numbers} buttonPressed={buttonPressed} />
  })
}

const NumberRows = ({numbers, buttonPressed}) => {
  return (
    <View style={styles.numbers}>
    </View>
  )
}

const styles = StyleSheet.create({
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#636363',
    alignItems: 'stretch',
  },
  btntext: {
    fontSize: 30,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default NumberRows;