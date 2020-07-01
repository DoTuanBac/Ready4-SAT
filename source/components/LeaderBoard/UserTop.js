import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Avatar from './Avatar'


export default function UserTop(props){
    return(
        <View style={styles.row}>
            <View style={styles.rowID}>
                <Text style={{color:"#aaaaad"} } >{props.index+1}</Text>
            </View>
            <View style={styles.rowprofile}>
                <View style={styles.rowProfilecontent}>
                    <Avatar size={50}  uri={props.user.avatar} />
                    <Text style={{fontSize: 14,color:"white",paddingHorizontal:8,}} >{props.user.name}</Text>
                </View>
                <View style={styles.rowpoint} >
                    <Text style={{color:"white"} } >{props.user.points}</Text>
                    <Text style={{fontSize: 12, color: '#aaaaad'}}>Points</Text>
                </View>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
         flexDirection: 'row',
         borderTopColor:'#aaaaad',
         borderWidth:0,
         borderTopWidth: 0.5,
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },
    rowID: {
         height: 50,
         alignItems: 'center',
         justifyContent: 'center',
        marginRight: 10,
    },
    rowpoint: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowprofile: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowProfilecontent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
