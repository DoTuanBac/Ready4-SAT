import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import BookmarkItem from "../components/Newsfeed/BookmarkItem";

export default function BookmarkedScreen(props){
    const item = [
        {id: 1, schoolName:'Trường đại học...', date:'12/06/2020', title: 'Trường đại học..........'},
        {id: 2, schoolName:'Trường đại học...', date:'12/06/2020', title: 'Trường đại học..........'},
        {id: 3, schoolName:'Trường đại học...', date:'12/06/2020', title: 'Trường đại học..........'},
        {id: 4, schoolName:'Trường đại học...', date:'12/06/2020', title: 'Trường đại học..........'},
    ];
    return(
        <View style={styles.container}>
            <FlatList
                data={item}
                renderItem={({ item }) =>
                    <BookmarkItem
                        navigation={props.navigation}
                        schoolName={item.schoolName}
                        date={item.date}
                        title={item.title}
                        route={item.id}
                    />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
})
