import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'

const displayNumbers = (numbers, buttonPressed) => {
  return numbers.map(number => {
    return (
      <TouchableOpacity key={number} onPress={() => buttonPressed(number)} style={styles.btn}>
        <Text style={styles.btntext}>{nums[i][j]}</Text>
      </TouchableOpacity>
    )
  })
}

const NumberRow = ({numbers, buttonPressed}) => {
  return (
    <View style={styles.row}>
      {displayNumbers(numbers, buttonPressed)}
    </View>
  )
}

const styles = StyleSheet.create({
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default NumberRow;