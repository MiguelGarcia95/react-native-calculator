import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const displayOperations = (operations, operate) => {
  return operations.map(operation => {
    return (
      <TouchableOpacity key={operation}  style={styles.btn} onPress={() => operate(operation)}>
        <Text style={styles.btntext}>{operation}</Text>
      </TouchableOpacity>
    )
  })
}

const OperationsColumn = () => {
  return (
    <View style={styles.operations}>

    </View>
  )
}

const styles = StyleSheet.create({
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#636363',
    alignItems: 'stretch',
  }
})

// class OperationsColumn extends Component {
//   render() {
//     return (
//       <View style={styles.operations}>
        
//       </View>
//     )
//   }
// }

export default OperationsColumn;