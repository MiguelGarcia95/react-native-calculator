import React from 'react'
import { View, Text } from 'react-native'

const CalculationsScreen = ({resultText, active}) => {
  return (
    <View style={[styles.result, active && {display: 'none'}]}>
      <Text style={styles.resultText}>{resultText}</Text>
    </View>
  )
}

export default CalculationsScreen
