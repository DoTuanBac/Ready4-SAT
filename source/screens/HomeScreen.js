import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Score from '../components/Home/Score'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import Unit from '../components/Home/Unit'
import UnitList from '../components/Home/UnitList'
import ProgressBar from '../components/Home/ProgressBar'
//import db from '../backend/firebase'
import {Test} from "../data/test";

export default function HomeScreen({navigation}){
    // FIREBASE
    /*db.firestore().collection('tests').doc('score').get().then((snapshot) => {
        console.log(snapshot.data())
    })*/

    const [isChange, setChange] = useState(false)
    const [isUnitOpen, setUnitOpen] = useState(false)

    const skills = [
        {id: 1, name:'Reading', percent:'35%'},
        {id: 2, name:'Writing', percent:'55%'},
        {id: 3, name:'Math-Calculator', percent: '25%'},
        {id: 4, name:'Math- No Calculator', percent: '60%'}
    ]

    const [isSkillOpen, setSkillOpen] = useState(skills.map((element) => ({...element, isOpen: false})))

    return(
        <View>
            <Score
                navigation={navigation}
                overall='900'
                math='450'
                rnw='450'
            />
            <View style={styles.subHeader}>
                <TouchableOpacity onPress={() => setChange(!isChange)}>
                    <View style={{marginHorizontal: 15}}>
                        {
                            (!isChange) ?
                            <FontAwesome name='tasks' size={24} color='#0E2C3D'/> :
                            <Feather name='grid' size={24} color='#0E2C3D'/>
                        }
                    </View>
                </TouchableOpacity>
                <View style={[styles.row, {justifyContent: 'space-around'}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Introduce')}>
                        <View style={[styles.row, {width: '100%'}]}>
                            <FontAwesome
                                name='bank' size={20} color='#0E2C3D'
                                style={{paddingHorizontal: 5}}
                            />
                            <Text>Schools</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                        <View style={[styles.row, {width: '100%'}]}>
                            <FontAwesome5
                                name='calculator' size={20} color='#0E2C3D'
                                style={{paddingHorizontal: 5}}
                            />
                            <Text>Test</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Vocab')}>
                        <View style={[styles.row, {width: '100%'}]}>
                            <FontAwesome
                                name='list-alt' size={20} color='#0E2C3D'
                                style={{paddingHorizontal: 5}}
                            />
                            <Text>Vocab</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {
                (!isChange) ?
                <View style={{backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress={() => setUnitOpen(!isUnitOpen)}>
                            <Unit style={'square'} name='Accessment Test' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setUnitOpen(!isUnitOpen)}>
                            <Unit style={'circle'} name='Arithmetic'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setUnitOpen(!isUnitOpen)}>
                            <Unit style={'diamond'} name='Quiz'/>
                        </TouchableOpacity>
                    </View>
                    {
                        (isUnitOpen) &&
                        <UnitList navigation={navigation} questions={Test} skill={true}/>
                    }
                </View> :
                <View>
                    <FlatList
                        data={isSkillOpen}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => setSkillOpen(isSkillOpen.map(
                                    (element) => (
                                        element.name === item.name ?
                                        {...element, isOpen : !item.isOpen} :
                                        {...element, isOpen : false}
                                    )
                                ))}
                            >
                                <View style={{backgroundColor: 'white', height: 50, flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <View>
                                        <Text style={{textAlign: 'center', color: '#05B5CC', fontSize: 16}}>{item.name}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                                        <View style={{backgroundColor: '#e4e4e4', width: '90%', height: 8, borderRadius: 4, alignSelf: 'center'}}>
                                            <ProgressBar percent={item.percent} />
                                        </View>
                                        <Text style={{color: '#F1D513'}}>{item.percent}</Text>
                                    </View>
                                </View>

                                {
                                    (item.isOpen) &&
                                    <UnitList navigation={navigation}  questions={Test} skill={false}/>
                                }
                            </TouchableOpacity>
                        )}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    subHeader: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
