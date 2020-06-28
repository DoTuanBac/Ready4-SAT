import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import VocabHelp from '../components/Vocab/VocabHelp'


export default function VocabHelpScreen(){


            return(
                <View style={styles.fullbox}>
                    <View style={styles.box}>
                  <VocabHelp ></VocabHelp> 
                    
    
                  </View>
                </View>
            );
     

    
}


const styles = StyleSheet.create({
 
    fullbox:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:"white",
    },
    box:
    {
        width:'95%',
        height:'90%',
        borderRadius: 4,
        borderColor:'#2B83B2',
        borderWidth: 1,

    },


})  