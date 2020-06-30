import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ProgressBar from './ProgressBar'
import { AntDesign } from '@expo/vector-icons'
import Avatar from '../Home/Avatar'

export default function Score(props){
    return(
        <View style={styles.contatiner}>
            <View style={styles.scoreContainer}>
                <Text style={{color: 'white', fontSize: 15, paddingTop: 15}}>Estimated Score</Text>
                <View style={styles.score}>
                    <View style={styles.user}>
                        <Avatar navigation={props.navigation} color={'white'} home={true}/>
                    </View>
                    <Text style={{fontSize: 60, color: 'white'}}>{props.overall}</Text>
                    <View style={[styles.skill]}>
                        <Text style={{color: 'white', fontSize: 24}}>{props.math}</Text>
                        <Text style={{color: 'white', fontSize: 12}}>R&W</Text>
                    </View>
                    <View style={styles.skill}>
                        <Text style={{color: 'white', fontSize: 24}}>{props.rnw}</Text>
                        <Text style={{color: 'white', fontSize: 12}}>Math</Text>
                    </View>
                    <View style={styles.user}/>
                </View>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={{width: '80%', alignItems: 'flex-end'}}>
                    <Text style={{color: '#F1D513'}}>80%</Text>
                </View>
                <ProgressBar borderColor='#e4ebed' percent='80%'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contatiner: {
        height: 165,
        backgroundColor: '#05B5CC',
        //backgroundColor: '#0E2C3D'
    },
    scoreContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    skill: {
        marginLeft: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 1
    },
    progressBarContainer: {
        paddingBottom: 10,
        paddingHorizontal: 12,
        justifyContent: 'flex-end'
    },
    user: {
        width: 50,
        alignItems: 'flex-end'
    }
})
