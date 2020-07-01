import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import TestDetail from '../components/Test/TestDetail'
import Finish from '../components/Vocab/Finish'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TestDetailScreen({navigation}){
    return(
        <View style={styles.fullbox}>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => {}}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialCommunityIcons name="lightbulb-on-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    fullbox: {
        backgroundColor:"white",
        flex:1,
    },
    bottom: {
        position: 'absolute',
        bottom:0,
        backgroundColor:'#white',
        width:'100%',
        borderBottomEndRadius: 4,
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
