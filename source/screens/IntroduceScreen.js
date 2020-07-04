import React, {useRef}  from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'

export default function IntroduceScreen({navigation}){


    return(
        <View style={styles.fullbox}>
            <Image style={styles.image}   source={require('../assets/images/introduce.jpg')}/>
            <TouchableOpacity style={styles.bottom}  onPress={() => navigation.navigate('Register')}>
                <Text style={{color:'white'}}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    fullbox:
    {
        flex: 1,

        alignItems: 'center',
        backgroundColor:"white",

    },
    bottom:
    {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom:0,
        backgroundColor:'#0084ad',
        width:'100%',
        padding:10,
    },
    image:
    {
width:'100%',
height:'100%',
    },
    })
