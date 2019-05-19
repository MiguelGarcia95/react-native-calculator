import React from 'react'
import { StyleSheet, View } from 'react-native';
import NumberRow from './NumberRow';

const displayRows = (numbersArray, buttonPressed) => {
  return numbersArray.map(numbers => {
    return <NumberRow key={numbers[0]} numbers={numbers} buttonPressed={buttonPressed} />
  })
}

const NumberRows = ({numbers, buttonPressed}) => {
  return (
    <View style={styles.numbers}>
      {displayRows(numbers, buttonPressed)}
    </View>
  )
}

const styles = StyleSheet.create({
  numbers: {
    flex: 3,
    backgroundColor: '#434343'
  },
});

export default NumberRows;