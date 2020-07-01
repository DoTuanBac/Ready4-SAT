import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import AnalyticsCircularProgcess from './AnalyticsCircularProgcess'
import TimeBar from './TimeBar'
import { AntDesign } from '@expo/vector-icons'

export default function Analysis(props){
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => {props.navigation.navigate('Practice')}}
        >
            <View style={[styles.titleContainer, styles.row]}>
                {
                    props.children
                }
                <Text style={{fontSize: 15, color: '#05B5CC'}}>{props.name}</Text>
            </View>
            <View style={[{flex: 1, paddingBottom: 10,}, styles.row]}>
                <View style={[{flex: 1, borderRightColor: '#b6c8cc', borderRightWidth: 0.8, marginTop: 10}, styles.column]}>
                    <AnalyticsCircularProgcess
                        color={props.color || '#05B5CC'}
                        percent={props.mastery / 10}
                        point={props.mastery}
                    />
                    <Text style={{fontSize: 12, color: '#9ea7a8'}}>Mastery Level</Text>
                </View>
                <View style={{flex: 3, justifyContent: 'space-between', paddingHorizontal: 7}}>
                    <View style={[{height: 50}, styles.row]}>
                        <Text style={{width: 75, color: '#6b7f87', paddingTop: 10,}}>Progress</Text>
                        <View style={{flex: 1}}>
                            <View style={{width: props.progress, alignItems: 'flex-end'}}>
                                <Text style={{color: '#F1D513'}}>{props.progress}</Text>
                            </View>
                            <ProgressBar percent={props.progress} borderColor={'#d3d3d3'}/>
                        </View>
                    </View>
                    <View style={[{height: 50}, styles.row]}>
                        <Text style={{width: 75, color: '#6b7f87'}}>Time per Question</Text>
                        <View style={{flex: 1}}>
                            <Text style={{color: '#F47C53'}}>{props.time}</Text>
                            <TimeBar />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', height: 20, borderTopColor: '#b6c8cc', borderTopWidth: 0.8}}>
                <AntDesign
                    name={'down'} color={'#b6c8cc'} size={15}
                    style={{flex: 1, alignSelf: 'center'}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 175,
        backgroundColor: 'white',
        marginHorizontal: 8,
        marginTop: 6,
        borderWidth: 0.8,
        borderColor: '#b6c8cc',
        borderRadius: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleContainer: {
        width: '100%',
        borderBottomColor: '#b6c8cc',
        borderBottomWidth: 0.8,
        paddingTop: 10,
        paddingBottom: 10,
    },
})
