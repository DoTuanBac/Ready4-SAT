import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Avatar from "./Avatar";
export default function TopLeaderBoard(props){
    function getSize(top) {
        if(top===1) return 80;
        else if(top===2) return 60;
        else if(top===3)  return 60;
    }

    return(
        <View style={styles.BoxTopDetail}>
        <Text style={styles.top}>{props.top}</Text>
        <Avatar size={getSize(props.top)} uri={props.user.avatar}/>
        <Text style={{color: '#aaaaad', paddingTop: 10,}}>{props.user.name}</Text>
        <Text style={styles.contentText}>{props.user.points}</Text>
        <Text style={{fontSize: 12, color: '#aaaaad'}}>Points</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    BoxTopDetail: {
        //flex: 1,
        marginTop:15,
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginBottom: 8,
    },
    contentText: {
        color:'#fff',
        fontSize: 16,
    },
    top: {
         color:'#d3d3d3',
        marginBottom:10,
    },
})
