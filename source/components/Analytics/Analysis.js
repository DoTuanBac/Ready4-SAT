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
            <View style={[{flex: 1}, styles.row]}>
                <View style={[{flex: 1, borderRightColor: '#d3d3d3', borderRightWidth: 1, marginTop: 10.}, styles.column]}>
                    <AnalyticsCircularProgcess
                        color={props.color || '#05B5CC'}
                        percent={props.mastery / 10}
                        point={props.mastery}
                    />
                    <Text style={{paddingBottom: 10, fontSize: 12, color: '#d3d3d3'}}>Mastery Level</Text>
                </View>
                <View style={{flex: 3, justifyContent: 'space-between', paddingHorizontal: 4}}>
                    <View style={[{height: 50}, styles.row]}>
                        <Text style={{width: 80}}>Progress</Text>
                        <View style={{flex: 1}}>
                            <View style={{width: props.progress, alignItems: 'flex-end'}}>
                                <Text style={{color: '#F1D513'}}>{props.progress}</Text>
                            </View>
                            <ProgressBar percent={props.progress} borderColor={'#d3d3d3'}/>
                        </View>
                    </View>
                    <View style={[{height: 50}, styles.row]}>
                        <Text style={{width: 80}}>Time per Question</Text>
                        <View style={{flex: 1}}>
                            <Text style={{color: '#F47C53'}}>{props.time}</Text>
                            <TimeBar />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', height: 20, borderTopColor: '#d3d3d3', borderTopWidth: 1}}>
                <AntDesign
                    name={'down'} color={'#d3d3d3'} size={15}
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
        borderWidth: 1,
        borderColor: '#d3d3d3',
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
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
})
