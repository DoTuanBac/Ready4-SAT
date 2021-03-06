import React from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function MyProfileScreen(props){
    const [value, onChangeText] = React.useState('Mai V');
    //const [user, setUser] = React.useState(Profile);
    const [score, setScore] = React.useState(1390);
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleGoToMyTest = React.useCallback(()=> {
        props.navigation.navigate('MyTest');
    },[]);

    return(

        <LinearGradient style={styles.container} colors={['#041c38', '#118791']}>

            <View style={styles.profile}>
                <View>
                    <View style={styles.perContainer}>
                        <Text style={styles.percent}>24%</Text>
                    </View>
                    <View style={styles.border}>
                        <AntDesign name="user" size={80} color="#14ccff" />
                    </View>
                </View>
                <View style={{margin: 6}}>
                    <Text style={{color: '#adb2b8', paddingTop: 15, fontSize: 13.5}}>Type Display Name</Text>
                </View>
                <TextInput

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
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail} onPress={()=> setShow(!show)}>
                    <Text style={styles.label}>Test Date</Text>
                    <Text style={styles.value}>{date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()}</Text>

                    {show && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>Desired Score</Text>
                    <Text style={styles.value}>{score}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>My Schools</Text>
                    <Image style={styles.schoolIcon} source={{uri: 'https://rubee.com.vn/admin/webroot/upload/image/images/logo/oxford_logo%20%20.jpg'}}/>
                </TouchableOpacity>
            <TouchableOpacity style={styles.detail}>
                    <Text style={styles.label}>School Matcher</Text>
                    <Image style={styles.schoolIcon} source={{uri: 'https://trangvisa.com/wp-content/uploads/2016/11/Harvard_Wreath_Logo_1.svg.png'}}/>
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
        margin: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    profileDetail: {
    },
    perContainer: {
        margin: 10,
        marginBottom: 15,
    },
    percent: {
        color: '#adb2b8',
        alignContent: 'center',
        paddingLeft: 26.5,
    },
    border:{
        borderRadius: 100,
        width: 100,
        height:100,
        borderColor: '#14ccff',
        borderWidth: 5,

        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        height: 30,
        paddingLeft: 50,
        paddingRight: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize:16,
    },
    detail: {
        flexDirection: 'row',
        paddingTop: 17.5,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 17.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
    },
    label: {
        color: '#29d5e3',
    },
    value: {
        color: '#29d5e3',
    },
    schoolIcon: {
        height: 32,
        width: 32,
        borderRadius: 100,
        marginTop: -20,
        marginBottom: -20,
    }
});
