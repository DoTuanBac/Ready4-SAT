import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import {getMasteredWords,getPercentWords} from './VocabCaculator'

export default function VocabItem(props){
    return(
        <TouchableOpacity style={styles.listbox} onPress={() => props.navigation.navigate('Learn',{words:props.words,id:0})} >
        <Text style={styles.basicWord2}>{props.name}</Text>
        <Text style={styles.mastered2}>{getMasteredWords(props.words)} Mastered</Text>
        <View style={styles.progressBarContainer}>
            <ProgressBar percent={getPercentWords(props.words)}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    progressBarContainer: {
        margin:5,
        width:'90%',
    },
    listbox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:30,
        backgroundColor:'white',
        borderRadius: 10,
        margin:20,
    },
    basicWord2: {
        color:'black',
        fontSize: 25,
        fontWeight:'bold',
        margin:5,
    },
    mastered2: {
        color:'black',
        fontSize: 15,
        margin:5,
    },
})
