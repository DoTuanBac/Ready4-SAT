import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ProgressBar(props){
    return(
         <View style={{
                height: 8,
                borderWidth: 0.8,
                borderColor: props.borderColor || 'white',
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    width: props.percent,
                    backgroundColor: props.backgroundColor || '#F1D513',
                    height: 8,
                    borderRadius: 4,
                }}>
            </View>
        </View>

    )
}
