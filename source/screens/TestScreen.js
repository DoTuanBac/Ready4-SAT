import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import TestCategories from '../components/Test/TestCategories'
import {Test} from '../data/test'

export default function TestScreen({navigation}){

        return(
            <View style={styles.fullbox}>
  
            <FlatList 
        data={Test}
        renderItem={({ item }) => <TestCategories navigation={navigation} item={item} ></TestCategories>}
        keyExtractor={item => item.id}
        style={styles.box}
      />
           </View>

        );
    }

const styles = StyleSheet.create({
fullbox:
{
    flex: 1, 
    backgroundColor:'#2B83B2',
    justifyContent: 'center',
        alignItems: 'center',
    
},
box:
{
    width:'90%',
}



})