import React from 'react'
import {View, FlatList, StyleSheet, Text} from 'react-native'
import NewsFeedItemView from "../components/Newsfeed/NewsFeedItemView";
import {NewsFeed} from "../data/newsfeed";

export default function NewsFeedScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={NewsFeed}
                renderItem={({ item }) =>
                    <NewsFeedItemView
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
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#fff',
    }
});
