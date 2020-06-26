import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Score from '../components/Home/Score' 
import { Feather } from '@expo/vector-icons'
import Unit from '../components/Home/Unit'
import UnitList from '../components/Home/UnitList'
import ProgressBar from '../components/Home/ProgressBar'

export default function HomeScreen({navigation}){
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
                    <Feather name='menu' size={24} color='black'/>    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Schools')}>
                    <Text>Schools</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text>Test</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Vocab')}>
                    <Text>Vocab</Text>    
                </TouchableOpacity>
            </View>
            {
                (!isChange) ?
                <View style={{backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress={() => setUnitOpen(!isUnitOpen)}>
                            <Unit style={'square'} name='Accessment Test'/>
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
                        <UnitList navigation={navigation} skill={true}/>
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
                                    <Text style={{textAlign: 'center'}}>{item.name}</Text>
                                    <ProgressBar percent={item.percent} />
                                </View>
                                
                                {
                                    (item.isOpen) &&
                                    <UnitList navigation={navigation} skill={false}/>
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
        justifyContent: 'space-around',
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    }
})