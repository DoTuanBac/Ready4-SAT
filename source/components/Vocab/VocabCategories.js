import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import VocabItem from './VocabItem'
import {getMasteredCategories,getPercentCategories} from './VocabCaculator'
export default function VocabCategories(props){
  
    const [count, setCount] = useState(0);

    if(count%2==1)
    return(
        <View  style={styles.fullbox}> 
        <TouchableOpacity  style={styles.box} onPress={() => setCount(count+1)} >
           
            <Text style={styles.basicWord}>{props.item.name}</Text>
        <Text style={styles.mastered}>{getMasteredCategories(props.item.categories)} Mastered</Text>
            <View style={styles.progressBarContainer}>
            <ProgressBar percent={getPercentCategories(props.item.categories)}/>
            </View>  
            <View style={styles.listbox}>
            <FlatList 
        data={props.item.categories}
        horizontal={true}
        renderItem={({ item }) => <VocabItem navigation={props.navigation} name={item.name} words={item.words}/>}
        keyExtractor={item => item.id}
      />
            
           
        
        </View>

        </TouchableOpacity>
        </View>
    );
    if(count%2==0)
    return(
        <View  style={styles.fullbox}> 
        <TouchableOpacity  style={styles.box2} onPress={() => setCount(count+1)} >
            
            <Text style={styles.basicWord2}>{props.item.name}</Text>
            <Text style={styles.mastered2}>{getMasteredCategories(props.item.categories)} Mastered</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar percent={getPercentCategories(props.item.categories)}/>
            </View>  
         
     

        </TouchableOpacity>
        </View>  
    );


}

const styles = StyleSheet.create({
 fullbox:
 {
width:'100%',
flex: 1, 
justifyContent: 'center',
    alignItems: 'center',

 },
    listbox:
    {
        width:'90%',
    },
    box: {

        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
        backgroundColor: '#0084ad',
        width:'100%',
    

    },
    box2: {

        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
        borderColor: '#05B5CC',
        borderWidth:1,
        width:'90%',
        marginVertical:20,
        borderRadius:10,
    },

    progressBarContainer : {
        margin:5,
        width:'90%',
    },

    basicWord:
    {

        fontSize: 25,
        fontWeight:'bold',
        margin:5,
        color:'white',
    },
    basicWord2:
    {

        fontSize: 25,
        fontWeight:'bold',
        margin:5,
        color:'gray',
    },
    mastered:
    {
        fontSize: 15,
        margin:5,
        color:'white',
    },
    mastered1:
    {
        fontSize: 15,
        margin:5,
    },
 


})