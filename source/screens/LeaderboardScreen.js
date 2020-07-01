import React from 'react'
import {FlatList, ScrollView, StyleSheet, View,Text,TouchableOpacity} from 'react-native'
import TopLeaderBoard from '../components/LeaderBoard/TopLeaderBoard'
import {LinearGradient} from 'expo-linear-gradient';
import {User} from '../data/user'
import UserTop from '../components/LeaderBoard/UserTop'

export default function LeaderboardScreen({navigation}) {
    User.sort(function (a, b) {
        return b.points - a.points;
    });
    return (

        <LinearGradient style={styles.fullbox} colors={['#041c38', '#118791']}>
            <View style={styles.BoxTop}>
                <TopLeaderBoard top={2} user={User[1]}/>
                <TopLeaderBoard top={1} user={User[0]}/>
                <TopLeaderBoard top={3} user={User[2]}/>
            </View>

            <ScrollView style={styles.box}>
                <FlatList
                    data={User}
                    renderItem={({item, index}) => <UserTop user={item} index={index}/>}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    fullbox: {
        flex: 1,
        alignItems: 'center',
    },
    BoxTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        width: '90%',
    },
    box: {
        width: '100%',
        marginTop: 10,
        height: 1,
    },
    subHeader: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,

    },
    contentText: {
        color: 'white',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 40,
    },
})
