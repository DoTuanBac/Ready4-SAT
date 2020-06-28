import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Avatar from '../Home/Avatar'

export default function UserTop(props){
    return(
        <View style={styles.row}>
            <View style={styles.rowID}>
                <Text style={{fontSize: 14,color:"white"} } >{props.index+1}</Text>
            </View>
            <View style={styles.rowprofile} >
                <View style={styles.rowProfilecontent}>
                    <Avatar size={40}  uri={props.user.avatar} />
                    <Text style={{fontSize: 14,color:"white",paddingHorizontal:5,}} >{props.user.name}</Text>
                </View>
            </View>
            <View style={styles.rowpoint} >
                <Text style={{fontSize: 18,color:"white"} } >{props.user.points}</Text>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
         flexDirection: 'row',
         borderTopColor:'white',
         borderWidth:0,
         borderTopWidth:1,
    },
    rowID: {
         width: '10%',
         height: 50,
         alignItems: 'center',
         justifyContent: 'center',
    },
    rowpoint: {
        width: '20%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowprofile: {
        width: '70%',
        height: 50,

    },
    rowProfilecontent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
})
