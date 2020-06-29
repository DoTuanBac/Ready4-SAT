import React from 'react'
import { View, StyleSheet } from 'react-native'
import Score from '../components/Home/Score'
import Analysis from '../components/Analytics/Analysis'
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function AnalyticsScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <Score
                navigation={navigation}
                overall='900'
                math='450'
                rnw='450'
            />
            <Analysis
                name={'Writing'}
                mastery={450}
                progress={'50%'}
                time={'0.05 min'}
            >
                <AntDesign 
                    name='edit' size={25} color={'#05B5CC'}
                    style={{marginHorizontal: 10}}
                />
            </Analysis>
            <Analysis
                name={'Reading'}
                mastery={680}
                progress={'30%'}
                time={'0.02 min'}
                color={'#F47C53'}
            >
                <SimpleLineIcons 
                    name='book-open' size={25} color={'#05B5CC'}
                    style={{marginHorizontal: 10}}
                />
            </Analysis>
            <Analysis
                name={'Math-Calculator'}
                mastery={930}
                progress={'67%'}
                time={'0.01 min'}
            >
                <SimpleLineIcons 
                    name='calculator' size={25} color={'#05B5CC'}
                    style={{marginHorizontal: 10}}
                />
            </Analysis>
            <Analysis
                name={'Math-No Calculator'}
                mastery={870}
                progress={'50%'}
                time={'0.05 min'}
            >
                <MaterialCommunityIcons 
                    name='border-none' size={30} color={'#05B5CC'}
                    style={{marginHorizontal: 10}}
                />
            </Analysis>
        </View>
    )
}

const styles = StyleSheet.create({})