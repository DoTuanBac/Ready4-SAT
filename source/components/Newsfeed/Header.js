import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

export default function Header(props){
    return(
        <View style={styles.header}>
            <Image
                style={styles.schoolImage}
                source={{uri: 'https://reactjs.org/logo-og.png'}}
            />
            <View style={styles.school}>
                <Text style={styles.schoolName}>{props.schoolName}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    schoolImage: {
        height: 40,
        width: 40,
        margin: 5,

    },
    school: {
        marginLeft: 5,
        //marginBottom: 5,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    schoolName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    date: {
        fontSize: 12,
        color: "gray",
    },
})
