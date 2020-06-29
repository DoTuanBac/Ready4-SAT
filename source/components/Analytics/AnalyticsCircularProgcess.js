import React from 'react'
import { View, Text } from 'react-native'
import CircularProgress from './CircularProcess'

export default function AnalyticsCircularProgcess(props){
    return(
        <View style={{flex: 1}}>
            <CircularProgress
                percent={props.percent}
                radius={32}
                bgRingWidth={6}
                progressRingWidth={6}
                ringBgColor='white'
                ringColor={props.color}
            >
                <CircularProgress
                    percent={100}
                    radius={24}
                    bgRingWidth={6}
                    progressRingWidth={6}
                    ringBgColor='#E4E4E4'
                    ringColor='#E4E4E4'
                >
                    <Text style={{fontWeight: 'bold', color: props.color}}>
                        {props.point}
                    </Text>
                </CircularProgress>
            </CircularProgress> 
        </View>
    )
}