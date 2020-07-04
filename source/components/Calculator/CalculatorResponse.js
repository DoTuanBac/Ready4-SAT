import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CalculatorResponse({ first, second, operator, result, refresh }){
    const input = `${first} ${operator} ${second}`

    return (
      <View>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>
            { result }
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={refresh}>
            <Text style={styles.delete}>
              {/* ⏎ */}
                AC
            </Text>
          </TouchableOpacity>

          <Text style={styles.input}>
            { first === '0' && !operator ? 'Enter your operation' : input }
          </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: 'flex-end',
    backgroundColor: 'red',
    marginTop: 25,
    paddingVertical: 25,
    paddingRight: 10,
    margin: 1,
  },

  result: {
    color: '#fff',
    fontSize: 42,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  delete: {
    color: 'black',
    fontSize: 23,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  input: {
    color: 'black',
    fontSize: 23,
    padding: 5,
  },
})