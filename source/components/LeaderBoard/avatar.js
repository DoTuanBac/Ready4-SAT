import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Avatar(props){
    return(
        <Image
        style={{
            width: props.size, 
            height:  props.size,
            borderRadius:100, 
    }}
         source={{
           uri: props.uri,
         }}
       />
    )
}