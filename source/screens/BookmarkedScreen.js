import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import BookmarkItem from "../components/Newsfeed/BookmarkItem";
import {NewsFeed} from "../data/newsfeed";
import NewsFeedItemView from "../components/Newsfeed/NewsFeedItemView";

export default function BookmarkedScreen(props){
    return(
        <View style={styles.container}>
            <FlatList
                data={NewsFeed}
                renderItem={({ item }) =>
                    <BookmarkItem
                        navigation={props.navigation}
                        imageSource={item.imageSource}
                        schoolName={item.schoolName}
                        date={item.date}
                        title={item.title}
                        content={item.content}
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
