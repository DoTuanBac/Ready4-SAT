import React from 'react'
import { View, Text } from 'react-native'

export default function TimeBar(){
    return(
        <View style={{
            height: 30,

        }}>
            <View style={{
                height: 8,
                borderBottomColor: '#b6c8cc',
                borderBottomWidth: 1,
            }}>
            </View>
            <View style={{height: 8, width: 8, borderRadius: 8, backgroundColor: '#F47C53', marginTop: -4}}>
            </View>
            <View style={{
                width: 32,
                borderLeftColor: '#b6c8cc',
                borderRightColor: '#b6c8cc',
                borderRightWidth: 1,
                borderLeftWidth: 1,
                height: 16,
                alignSelf: 'center',
                margin: -12,
            }}>
                <Text style={{color: 'green', fontSize: 12, textAlign: 'center', paddingTop: 15,}}>Goal</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{color: '#999', fontSize: 12}}>Too Fast</Text>
                <Text style={{color: '#999', fontSize: 12}}>Too Slow</Text>
            </View>
        </View>
    )
}
