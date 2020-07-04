import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from "./Header";

export default function BookmarkItem(props) {

    const { schoolName, date, title, imageSource, content, navigation } = props;

    const handleGoToDetail = React.useCallback(() => {
        navigation.navigate('NewsFeedDetail', {
            schoolName,
            imageSource,
            date,
            title,
            content,
        });
    },[navigation]);

    return (
        <TouchableOpacity style={styles.container} onPress={handleGoToDetail}>
            <Header schoolName={schoolName} date={date} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#a9a9a9',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 5,
        marginBottom: 5
    },
});
