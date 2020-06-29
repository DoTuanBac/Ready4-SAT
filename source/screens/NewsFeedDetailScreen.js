import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import Dash from 'react-native-dash';
import Header from "../components/Newsfeed/Header";

export default function NewsFeedDetailScreen(props) {
    const {route} = props;
    const  {schoolName, title, date, content, imageSource} = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={{height: 50,marginBottom: 10, marginTop: 5,}}>
                <Header schoolName={schoolName} date={date} />
            </View>
            <Image
                style={styles.image}
                source={{uri: imageSource}}
            />
            <Text style={styles.title}>{title}</Text>
            <Dash
                style={{marginBottom: 5, marginLeft: 5, marginRight: 5,}}
                dashGap={3}
                dashLength={5}
                dashThickness={1}
                dashColor='#d3d3d3'
            />
            <View style={styles.content}>
                <Text style={{textAlign: 'left', fontSize: 16,}}>{content}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
    image: {
        height: 250,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 5,
        marginBottom: 10,
        marginTop: 10,
    },
    content: {
        padding: 10,
        marginBottom: 10,
    }
})
