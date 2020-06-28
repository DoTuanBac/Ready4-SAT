import React from 'react'
import {View, FlatList, StyleSheet, Text} from 'react-native'
import NewsFeedItemView from "../components/Newsfeed/NewsFeedItemView";
import {NewsFeed} from "../data/newsfeed";

export default function NewsFeedScreen(props) {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <FlatList
                data={NewsFeed}
                renderItem={({ item }) =>
                    <NewsFeedItemView
                        navigation={navigation}
                        schoolName={item.schoolName}
                        date={item.date}
                        title={item.title}
                    />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
});
