import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AnalyticsCircularProgcess from '../components/Analytics/AnalyticsCircularProgcess'
import { AntDesign } from '@expo/vector-icons';

export default function ResultScreen({navigation}){
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Home')}}
                >
                    <Text style={{color: 'white', paddingLeft: 20, fontSize: 16}}>Quit</Text>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.headerBox}>
                    <Text style={{color: 'white'}}>4200</Text>
                </View>
            ),
        });
    }, [navigation])

    return(
        <View style={styles.container}>
            <View style={[styles.got, styles.column]}>
                <Text style={{color: 'white', fontSize: 20}}>You've got</Text>
                <Text style={{color: '#F1D513', fontSize: 50}}>4/5</Text>
                <Text style={{color: 'white', fontSize: 12}}>Correct Questions</Text>
                <Text style={{color: 'white', fontSize: 12}}>(0 skipped)</Text>
            </View>
            <View style={[styles.did, styles.column]}>
                <Text style={{color: 'white', fontSize: 16, paddingVertical: 10}}>Here's how you did</Text>
                <View style={[styles.row, {width: '100%'}]}>
                    <View style={[styles.column,{width: '50%', borderRightColor: 'white', borderRightWidth: 1}]}>
                        <AnalyticsCircularProgcess 
                            percent={'60%'} 
                            color={'#05B5CC'} 
                            bgColor={'#0E2C3D'} 
                            point={230}
                        />
                        <Text style={{color: 'white'}}>Mastery Level</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '50%'}}>
                        <Text style={{color: 'green', fontSize: 25}}>05:54 min</Text>
                        <Text style={{color: 'white'}}>(On Peace)</Text>
                        <Text style={{color: 'white'}}>Your Pace</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.decision, styles.column, {height: '100%'}]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
                >
                    <View style={{width: '80%', borderRadius: 4, borderColor: 'white', borderWidth: 1, height: 40, justifyContent: 'center', margin: 5, backgroundColor: 'white'}}>
                        <Text style={{color: '#0E2C3D', textAlign: 'center'}}>Review Answers</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
                >
                    <View style={{width: '80%', borderRadius: 4, borderColor: 'white', borderWidth: 1, height: 40, justifyContent: 'center', margin: 5}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>Next Topic</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.row, {justifyContent: 'space-between', width: '80%'}]}>
                    <View style={styles.row}>
                        <AntDesign 
                            name='reload1' color='white' size={20}
                            style={{paddingRight: 10}}
                        />
                        <Text style={{color: 'white'}}>Redo Set</Text>
                    </View>
                    <View style={styles.row}>
                        <AntDesign 
                            name='rightsquareo' color='white' size={20}
                            style={{paddingRight: 10}}
                        />
                        <Text style={{color: 'white'}}>Next Set</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E2C3D'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    got: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 30
    }, 
    did: {
        flex: 1,
    },
    decision: {
        flex: 1,
    },
    headerBox: {
        borderColor: 'white', 
        borderRadius: 2, 
        borderWidth: 1, 
        paddingHorizontal: 8,
        marginRight: 20, 
        paddingVertical: 4
    }
})