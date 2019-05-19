import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CalculationsScreen = ({resultText, active}) => {
  return (
    <View style={[styles.result, active && {display: 'none'}]}>
      <Text style={styles.resultText}>{resultText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultActive: {
    flex: 0
  },
  resultText: {
    fontSize: 30,
    color: 'black'
  },
});

export default CalculationsScreen
