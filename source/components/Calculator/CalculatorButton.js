import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function  CalculatorButton({ operator, handleButtonPress }){
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleButtonPress(operator)}
      >
        <Text style={styles.item}>
          { operator }
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 1,
  },

  item: {
    color: '#fff',
    fontSize: 26,
  },
});
