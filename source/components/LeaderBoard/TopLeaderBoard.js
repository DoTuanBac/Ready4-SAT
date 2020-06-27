import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import Avatar from './Avatar'
export default function TopLeaderBoard(props){
    function getSize(top)
    {
        if(top==1) return 120;
        else if(top==2) return 90;
        else if(top==3)  return 60;
    }
    return(
        <View style={styles.BoxTopDetail}>
        <Text style={styles.top}>{props.top}</Text>
    <Avatar size={getSize(props.top)} uri={props.user.avatar}></Avatar>
    <Text style={styles.contentText}>{props.user.name}</Text>   
    <Text style={styles.contentText}>{props.user.points}</Text>     
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