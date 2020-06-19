import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import VocabItem from './VocabItem'
import {getMastered,getPercent} from './VocabCaculator'
export default function VocabCategories(props){
  
    const [count, setCount] = useState(0);

    if(count%2==1)
    return(
        <View style={styles.fullbox}>
        <TouchableOpacity  style={styles.box} onPress={() => setCount(count+1)} >
           
            <Text style={styles.basicWord}>{props.item.name}</Text>
        <Text style={styles.mastered}>{getMastered(props.item.item)}</Text>
            <View style={styles.progressBarContainer}>
            <ProgressBar percent={getPercent(props.item.item)}/>
            </View>  
            <View style={styles.listbox}>
            <FlatList 
        data={props.item.item}
        horizontal={true}
        renderItem={({ item }) => <VocabItem navigation={props.navigation} item={item}/>}
        keyExtractor={item => item.id}
      />
            
           
        
        </View>

        </TouchableOpacity>
        </View>
    );
    if(count%2==0)
    return(
        <View style={styles.fullbox}>
        <TouchableOpacity  style={styles.box} onPress={() => setCount(count+1)} >
            
            <Text style={styles.basicWord}>{props.item.name}</Text>
            <Text style={styles.mastered}>{getMastered(props.item.item)}</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar percent={getPercent(props.item.item)}/>
            </View>  
         
     

        </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({
    fullbox:
    {
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
        backgroundColor: '#2B83B2',
        width:'90%',
        marginVertical:20,
    },

    progressBarContainer: {
        margin:5,
        width:'90%',
    },

    basicWord:
    {
        color:'white',  
        fontSize: 25,
        fontWeight:'bold',
        margin:5,
    },
    mastered:
    {
        color:'white',  
        fontSize: 15,
        margin:5,
    },
 


})