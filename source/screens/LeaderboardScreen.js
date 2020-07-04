import React from 'react'
import {FlatList, ScrollView, StyleSheet, View,Text,TouchableOpacity} from 'react-native'
import TopLeaderBoard from '../components/LeaderBoard/TopLeaderBoard'
import {LinearGradient} from 'expo-linear-gradient';
import {User} from '../data/user'
import UserTop from '../components/LeaderBoard/UserTop'

export default function LeaderboardScreen({navigation}) {

    const [isOpen, setOpen] = React.useState(false);

    User.sort(function (a, b) {
        return b.points - a.points;
    });

    return (
        <LinearGradient style={styles.fullbox} colors={['#041c38', '#118791']}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                <TouchableOpacity>
                    <Text style={styles.text}>Top Schools</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOpen(!isOpen)}>
                    {
                        (!isOpen) ?
                            <Text style={styles.open}>All Time</Text> :
                            <Text style={styles.text}>All Time</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Location</Text>
                </TouchableOpacity>
            </View>
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
    text: {
        color: '#fff',
        padding: 5,
        fontWeight: 'bold',
    },
    open: {
        color: 'red',
        padding: 5,
        fontWeight: 'bold',
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
})
