import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import {getMastered,getPercent} from './TestCaculator'
export default function TestCategories(props){
  


    return(
 
        <TouchableOpacity  style={styles.box} onPress={() => props.navigation.navigate('Question',{questions:props.item.questions})}>
            
            <Text style={styles.basicWord}>{props.item.name}</Text>
            <Text style={styles.mastered}>{getMastered(props.item.questions)} Mastered</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar percent={getPercent(props.item.questions)}/>
            </View>  
         
     

        </TouchableOpacity>

    );


}

const styles = StyleSheet.create({
  
  
    box: {

        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
        backgroundColor: 'white',
        width:'100%',
        marginVertical:20,
        borderRadius:4,
    },

    progressBarContainer: {
        margin:5,
        width:'90%',
    },

    basicWord:
    {
        color:'black',  
        fontSize: 25,
        fontWeight:'bold',
        margin:5,
    },
    mastered:
    {
        color:'black',  
        fontSize: 15,
        margin:5,
    },
 


})