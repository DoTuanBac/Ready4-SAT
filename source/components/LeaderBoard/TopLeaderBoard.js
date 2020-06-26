import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import Avatar from './Avatar'
export default function TopLeaderBoard(props){
    return(
        <View style={styles.BoxTopDetail}>
        <Text style={styles.top}>{props.top}</Text>
    <Avatar size={props.size} uri={props.uri}></Avatar>
    <Text style={styles.contentText}>Tuan Bac</Text>   
    <Text style={styles.contentText}>1900</Text>     
    </View>
    )
}
const styles = StyleSheet.create({

    BoxTopDetail:
    {
        alignItems: 'center',
    },
    contentText:
    {
        color:'white',
      

    },
    top:
    {
         color:'white',
        marginBottom:10,
    },
    })