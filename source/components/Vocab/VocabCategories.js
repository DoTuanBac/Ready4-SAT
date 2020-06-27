import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import VocabItem from './VocabItem'
import {getMasteredCategories,getPercentCategories} from './VocabCaculator'
export default function VocabCategories(props){
  
    const [count, setCount] = useState(0);

    if(count%2==1)
    return(
        
        <TouchableOpacity  style={styles.box} onPress={() => setCount(count+1)} >
           
            <Text style={styles.basicWord}>{props.item.name}</Text>
        <Text style={styles.mastered}>{getMasteredCategories(props.item.categories)}</Text>
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
      
    );
    if(count%2==0)
    return(
        
        <TouchableOpacity  style={styles.box} onPress={() => setCount(count+1)} >
            
            <Text style={styles.basicWord}>{props.item.name}</Text>
            <Text style={styles.mastered}>{getMasteredCategories(props.item.categories)}</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar percent={getPercentCategories(props.item.categories)}/>
            </View>  
         
     

        </TouchableOpacity>
     
    );


}

const styles = StyleSheet.create({
 
    listbox:
    {
        width:'90%',
    },
    box: {

        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
        backgroundColor: '#2B83B2',
        width:'100%%',
        marginVertical:20,
        borderRadius:10,
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