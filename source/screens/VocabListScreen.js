import React from 'react'
import { View, Text,FlatList,TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import {Word} from '../data/word'

export default function VocabListScreen({navigation}){
    return(
        <View style={styles.fullbox}>
            <ScrollView style={styles.box}>
                <FlatList
                data={Word}
                renderItem={({ item ,index}) =>
                    <FlatList
                    data={item.categories}
                    renderItem={({ item ,index}) =>
                        <FlatList
                        data={item.words}
                        renderItem={({ item ,index}) =>
                            <TouchableOpacity
                            style={styles.row}><Text>{item.word}</Text></TouchableOpacity>
                            }
                        keyExtractor={item => item.id}
                        />
                    }
                    keyExtractor={item => item.id}
                  />
                }
                keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    fullbox:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white",
    },
    box:{
        width:'90%',
        height:1,


    },
    row:{
        borderBottomWidth:1,
        paddingVertical:10,
    },
});
