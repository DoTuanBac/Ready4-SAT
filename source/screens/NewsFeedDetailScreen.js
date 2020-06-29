import React from 'react'
import { View, Text } from 'react-native'

export default function NewsFeedDetailScreen(props) {
    const {route, navigation} = props;
    const  {title} = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{title}</Text>
        </View>
    )
}
