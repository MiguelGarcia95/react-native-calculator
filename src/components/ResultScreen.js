import React from 'react'
import { View, Text } from 'react-native'

const ResultScreen = ({calculationText, active}) => {
  return (
    <View style={active ? styles.calculationActive : styles.calculation}>
      <Text style={active ? styles.calculationTextActive : styles.calculationText}>{calculationText}</Text>
    </View>
  )
}

export default ResultScreen
