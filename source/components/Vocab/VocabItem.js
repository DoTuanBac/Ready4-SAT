import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import {getMasteredWords,getPercentWords} from './VocabCaculator'
import { Entypo } from '@expo/vector-icons'

export default function VocabItem(props){
    return(
        <View style={styles.box}>
            <TouchableOpacity style={styles.listbox} onPress={() => props.navigation.navigate('Learn',{words:props.words,id:0})} >
                <Text style={styles.basicWord2}>{props.name}</Text>
                <Text style={styles.mastered2}>{getMasteredWords(props.words)} Mastered</Text>
                <View style={styles.progressBarContainer}>
                    <ProgressBar borderColor='#a1e6f0' backgroundColor='#a1e6f0' percent={getPercentWords(props.words)}/>
                </View>
                <Entypo name="aircraft-take-off" size={20} color="#dae9eb" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    progressBarContainer: {
        padding:5,
        width:'95%',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
    listbox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5ca2ab',
        borderWidth:0.2,
        width:'97%',
        marginVertical: 5,
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
