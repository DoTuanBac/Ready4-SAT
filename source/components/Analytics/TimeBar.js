import React from 'react'
import { View, Text } from 'react-native'

export default function TimeBar(){
    return(
        <View style={{
            height: 30,

        }}>
            <View style={{
                height: 8,
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 1,
            }}>
            </View>
            <View style={{height: 8, width: 8, borderRadius: 8, backgroundColor: '#F47C53', marginTop: -4}}>
            </View>
            <View style={{
                width: 32,
                borderLeftColor: '#d3d3d3',
                borderRightColor: '#d3d3d3',
                borderRightWidth: 1,
                borderLeftWidth: 1,
                alignSelf: 'center',
               
            }}>
                <Text style={{color: 'green', fontSize: 12, textAlign: 'center'}}>Goal</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -16}}>
                <Text style={{color: '#999', fontSize: 12}}>Too Fast</Text>
                <Text style={{color: '#999', fontSize: 12}}>Too Slow</Text>
            </View>
        </View>
    )
}
