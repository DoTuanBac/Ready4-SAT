import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import TestDetail from '../components/Test/TestDetail'
import Finish from '../components/Vocab/finish'
export default function TestDetailScreen({route,navigation}){
    const [count, setCount] = useState(0);
    const [check, setCheck ]= useState(false)
    const [score, setScore] = useState(0);
    const { questions } = route.params;
    var x=0;
    function checkcheck()
    {
        if(check==true)  setCheck(false);
        else  setCheck(true);
    }
    for(let question of questions)
    {
        if(count==x)
        {
           
    return(
        <View style={styles.fullbox}>
             
            <TestDetail question={question} check={check}></TestDetail>
              
            <View style={styles.bottom}>
           <TouchableOpacity onPress={() => {setCount(count-1), setCheck(false)}}>
               <Text style={{color:"white"}}>Previous</Text>    
           </TouchableOpacity>
           <TouchableOpacity onPress={() => checkcheck()}>
               <Text style={{color:"white"}}>Check</Text>    
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {setCount(count+1), setCheck(false)}}>
               <Text style={{color:"white"}}>Next</Text>    
           </TouchableOpacity>
           </View>
        
        </View>
    )
}
   
x++;
}
return(
   <Finish score={score} sum={x} route={"Test"} navigation={navigation}></Finish>
 );

}

const styles = StyleSheet.create({
 
    fullbox:
    {
backgroundColor:"white",
        flex:1,
    },
  
 
    bottom:
    {
        position: 'absolute',
        bottom:0,
        backgroundColor:'#2B83B2',
        width:'100%',
        borderBottomEndRadius: 4,
        padding:10,
        backgroudColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },



})  