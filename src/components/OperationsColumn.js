import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const displayOperations = (operations, operate) => {
  return operations.map(operation => {
    return (
      <TouchableOpacity key={operation}  style={styles.btn} onPress={() => operate(operation)}>
        <Text style={styles.btntext}>{operation}</Text>
      </TouchableOpacity>
    )
  })
}

const OperationsColumn = ({operations, operate}) => {
  return (
    <View style={styles.operations}>
      {displayOperations(operations, operate)}
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

export default OperationsColumn;