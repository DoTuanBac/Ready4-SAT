import React from 'react'
import { View, FlatList } from 'react-native'
import { newsfeed } from '../../data/newsfeed'
import NewsfeedItemView from './NewsfeedItemView'

export default function NewsFeedScreen(props) {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={newsfeed}
                renderItem={({ item }) => (
                    <NewsfeedItemView
                        title={item.title}
                        schoolName={item.schoolName}
                        date={item.date}
                        image={item.image} 
                        route={item.id}
                        navigation={item.navigation}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    }
});