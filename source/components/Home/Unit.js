import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Unit(props){
    switch(props.style){
        case 'circle': 
            return(
                <View style={styles.container}>
                    <View style={[styles.circle, styles.center]}>
                        <SimpleLineIcons name="calculator" size={45} color="white"/>
                    </View>
                    <Text style={[styles.text, {color: '#F1D513'}]}>{props.name}</Text>
                </View>
            )
        case 'square': 
            return(
                <View style={styles.container}>
                    <View style={[styles.square, styles.center]}>
                        <MaterialCommunityIcons name="brain" size={60} color="white" style={{opacity: 0.8}}/>
                    </View>
                    <Text style={[styles.text, {color: '#05B5CC'}]}>{props.name}</Text>
                </View>
            )
        case 'diamond': 
            return(
                <View style={styles.container}>
                    <View style={[styles.diamond, styles.center]}>
                        <View style={[styles.quiz, styles.center]}>
                            <Text style={{color:'white', fontSize: 36}}>?</Text>
                        </View>
                    </View>
                    <Text style={[styles.text, {paddingTop: 17.5, color: '#F47C53'}]}>{props.name}</Text>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: '50%',
        backgroundColor: '#F1D513',
        marginHorizontal: 15,
        marginTop: 20,
    },
    square: {
        height: 90,
        width: 90,
        backgroundColor: '#05B5CC',
        marginHorizontal: 15,
        marginTop: 20
    },
    diamond: {
        height: 100 / Math.sqrt(2),
        width: 100 / Math.sqrt(2),
        backgroundColor: '#F47C53',
        marginHorizontal: 15,
        marginTop: 20,
        transform: [{rotate: '-45deg'}],
        alignSelf: 'center'
    },
    text: {
        width: 90,
        textAlign: 'center'
    },
    quiz: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        borderColor: 'white',
        borderWidth: 3,
        transform: [{rotate: '45deg'}],
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})