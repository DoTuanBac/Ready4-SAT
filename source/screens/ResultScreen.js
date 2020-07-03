import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AnalyticsCircularProgcess from '../components/Analytics/AnalyticsCircularProgcess'

export default function ResultScreen({navigation}){
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Home')}}
                >
                    <Text style={{color: 'white'}}>Quit</Text>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <Text style={{color: 'white'}}>4200</Text>
            ),
        });
    }, [navigation])

    return(
        <View style={styles.container}>
            <View style={[styles.got, styles.column]}>
                <Text style={{color: 'white', fontSize: 20}}>You've got</Text>
                <Text style={{color: '#F1D513', fontSize: 50}}>4/5</Text>
                <Text style={{color: 'white', fontSize: 15}}>Correct Questions</Text>
                <Text style={{color: 'white', fontSize: 15}}>(0 skipped)</Text>
            </View>
            <View style={[styles.did, styles.column]}>
                <Text>Here's how you did</Text>
                <View style={styles.row}>
                    <View>
                        <AnalyticsCircularProgcess 
                            percent={'60%'} 
                            color={'#05B5CC'} 
                            bgColor={'#0E2C3D'} 
                            point={230}
                        />
                        <Text>Mastery Level</Text>
                    </View>
                    <View>
                        <Text>Your Pace</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.decision, styles.column]}>
                <Text>Review Answers</Text>
                <Text>Next Topic</Text>
                <View style={styles.row}>
                    <Text>Redo Set</Text>
                    <Text>Next Set</Text>
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
    }
})