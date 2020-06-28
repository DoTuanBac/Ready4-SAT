import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import {Profile} from "../data/profile";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";

export default function MyProfile(props){
    const [value, onChangeText] = React.useState('');
    //const [isUser, setIsUser] = React.useState(false);
    const [user] = React.useState(Profile);

    let index = 0;
    const data = [
        {key: index++, score: 1350},
        {key: index++, score: 1350},
        {key: index++, score: 1350},
        {key: index++, score: 1350},
        {key: index++, score: 1350},
        {key: index++, score: 1350},
    ]

    const handleGoToMyTest = React.useCallback(()=> {
        props.navigation.navigate('MyTest');
    },[]);

    return(
        <LinearGradient style={styles.container} colors={['#231f20', '#14ccff']}>
            <View style={styles.profile}>
                <View>
                    <View style={styles.perContainer}>
                        <Text style={styles.percent}>24%</Text>
                    </View>
                    <View style={styles.border}>
                        <AntDesign name="user" size={80} color="#5fb8cf" />
                    </View>
                </View>
                <View style={{margin: 6}}>
                    <Text style={{color: '#e5e5e5'}}>Type Display Name</Text>
                </View>
                <TextInput
                    flex center
                    style={styles.name}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>
            <View style={styles.profileDetail}>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>vungoc2901@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>Plan</Text>
                    <Text style={styles.value}>No Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail} onPress={handleGoToMyTest}>
                    <Text style={styles.label}>My Tests</Text>
                    <Text style={styles.value}>{user.myTest}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>Test Date</Text>
                    <Text style={styles.value}>{user.date}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>Desired Score</Text>
                    <Text style={styles.value}>{user.score}</Text>
                    {/*<AntDesign name="right" size={24} color="white" />*/}
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>My Schools</Text>
                    <Text style={styles.value}>{user.school}</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>School Matcher</Text>
                    <Text style={styles.value}>{user.schoolMatcher}</Text>
            </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        margin: 10,
        alignItems: 'center',
        marginBottom: 50,
    },
    profileDetail: {
    },
    perContainer: {
        margin: 10,
    },
    percent: {
        color: '#fff',
        alignContent: 'center',
        paddingLeft: 28,
    },
    border:{
        borderRadius: '50%',
        width: 100,
        borderColor: '#5fb8cf',
        borderWidth: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        color: '#fff',
        textAlign: 'center',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    label: {
        color: '#e5e5e5',
    },
    value: {
        color: '#e5e5e5',
    },
});
