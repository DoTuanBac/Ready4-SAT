import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Avatar(props){
    return(
        <TouchableOpacity
            onPress={() => {props.navigation.navigate('MyProfile')}}
        >
            <View style={[styles.userIcon, props.home && styles.home, {borderColor: props.color}]}>
                <AntDesign name='user' size={24} color={props.color}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userIcon: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    home: {
        marginRight: 30,
        marginTop: -60
    }
})