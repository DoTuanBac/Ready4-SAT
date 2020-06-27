import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native'
import { newsfeed } from '../../data/newsfeed'
import NewsfeedItemView from './NewsfeedItemView'

export default function NewsFeedScreen(props) {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={newsfeed}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <NewsfeedItemView
                        navigation={navigation}
                        schoolName={item.schoolName}
                        date={item.date}
                        title={item.title}
                    ></NewsfeedItemView>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
});