import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import VocabDetail from '../components/Vocab/VocabDetail'
import Finish from '../components/Vocab/finish'

export default function VocabDetailScreen({route,navigation}){
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const { words } = route.params;
    var x=0;
    for(let item of words)
    {
        if(count==x)
        {
            return(
                <View style={styles.fullbox}>
                    <View style={styles.box}>
                    <VocabDetail  word={item} ></VocabDetail>
                    
                    <View style={styles.bottom}>
           
                <TouchableOpacity onPress={() => setCount(count+1)}>
                    <Text style={{color:"white"}}>Don't know</Text>    
                </TouchableOpacity>
             
                <TouchableOpacity onPress={() => {setCount(count+1),setScore(score+1)}}>
                    <Text style={{color:"white"}}>Master</Text>    
                </TouchableOpacity>
           
                    </View>
                  </View>
                </View>
            );
        }
   
        x++;
    }
     return(
        <Finish score={score} sum={x} route={"Vocab"} navigation={navigation}></Finish>
     );
    
}


const styles = StyleSheet.create({
 
    fullbox:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:"white",
    },
    box:
    {
        width:'95%',
        height:'90%',
        borderRadius: 4,
        borderColor:'#2B83B2',
        borderWidth: 1,

    },
 
    bottom:
    {
        position: 'absolute',
        bottom:0,
        backgroundColor:'#05B5CC',
        width:'100%',
        borderBottomEndRadius: 4,
        padding:10,
        backgroudColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },


})  