import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Finish(props){
    return(
        <LinearGradient style={styles.fullbox}  colors={[ '#0a566b','#14ccff']}>

        <Text style={styles.score}>{props.score}/{props.sum}</Text>
           <TouchableOpacity style={styles.finishButton} onPress={() => props.navigation.navigate(props.route)}>
         <Text style={styles.finishText}>Finish</Text>
        </TouchableOpacity>

     </LinearGradient>
    )
}


const styles = StyleSheet.create({
    fullbox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },

     score: {
        color:"white",
        padding:50,
        fontSize:100,
        fontWeight:"bold",
    },
    finishButton: {
       borderColor:'white',
       borderWidth:1,
        borderRadius: 4,
        width:'90%',
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',

    },
    finishText: {
        color:"white",
        padding:10,
        paddingHorizontal:30,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        justifyContent: 'center',
    },


})
