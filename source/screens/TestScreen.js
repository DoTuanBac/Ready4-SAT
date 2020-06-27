import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import TestCategories from '../components/Test/TestCategories'
import {Test} from '../data/test'
import { LinearGradient } from 'expo-linear-gradient';

export default function TestScreen({navigation}){

        return(
            <LinearGradient style={styles.fullbox}  colors={[ '#0a566b','#14ccff']}>
  
            <FlatList 
        data={Test}
        renderItem={({ item }) => <TestCategories navigation={navigation} item={item} ></TestCategories>}
        keyExtractor={item => item.id}
        style={styles.box}
      />
           </LinearGradient>

        );
    }

const styles = StyleSheet.create({
fullbox:
{
    flex: 1, 
    justifyContent: 'center',
        alignItems: 'center',
    
},
box:
{
    width:'90%',
}



})