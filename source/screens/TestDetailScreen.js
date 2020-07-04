import React, {useLayoutEffect, useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import TestDetail from '../components/Test/TestDetail'
import Finish from '../components/Vocab/Finish'
import {AntDesign, Feather} from '@expo/vector-icons';
import CountDown from "../components/Practice/CountDown";

export default function TestDetailScreen({route,navigation}){
    const [count, setCount] = useState(0);
    const [check, setCheck ]= useState(false)
    const [score, setScore] = useState(0);
    const { questions } = route.params;

    let x=0;
    let progress='0%';
    function checkcheck()
    {
        if(check===true)  setCheck(false);
        else  setCheck(true);
    }
    for(let question of questions)
    {
        if(count===x) {
            progress
            return(
                <View style={styles.fullbox}>
                    <TestDetail
                        question={question}
                        check={check}
                        progress={(count + 1) * 100 / questions.length + '%'}
                    />

                    <View style={styles.bottom}>
                       <TouchableOpacity onPress={() => {setCount(count-1) && setCheck(false)}}>
                          <AntDesign name="leftcircleo" size={24} color="white" />
                       </TouchableOpacity>
                       <TouchableOpacity onPress={() => checkcheck()}>
                           <AntDesign name="checkcircleo" size={24} color="white" />
                       </TouchableOpacity>
                       <TouchableOpacity onPress={() => {setCount(count+1) && setCheck(false)}}>
                           <AntDesign name="rightcircleo" size={24} color="white" />
                       </TouchableOpacity>
                    </View>
                </View>
            )
        }
        x++;
    }
    return(
       <Finish
           score={score}
           sum={questions.length}
           route={"Test"}
           navigation={navigation}
       />
     );

};

const styles = StyleSheet.create({
    fullbox: {
        backgroundColor:"white",
        flex:1,
    },
    bottom: {
        position: 'absolute',
        bottom:0,
        backgroundColor:'#0E2C3D',
        width:'100%',
        borderBottomEndRadius: 4,
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
