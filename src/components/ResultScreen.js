import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultScreen = ({calculationText, active}) => {
  return (
    <View style={active ? styles.calculationActive : styles.calculation}>
      <Text style={active ? styles.calculationTextActive : styles.calculationText}>{calculationText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  calculationText: {
    fontSize: 24,
    color: '#aaa'
  },
  calculationTextActive: {
    fontSize: 54,
    color: 'black'
  },
  calculationActive: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});

export default ResultScreen
