import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import VocabCategories from '../components/Vocab/VocabCategories'
import {Word} from '../data/word'
export default function VocabDetailScreen({navigation}){
    const [count, setCount] = useState(0);

    if(count%2==0)
    return(
        <View style={styles.fullbox}>
          <TouchableOpacity onPress={() => setCount(count+1)}  style={styles.box}>
           <Text style={styles.word} >Word</Text>
           <Text style={styles.adj}>Adj</Text>
           <Text style={styles.pronounce}>phát âm</Text>
           <Text style={styles.tap}>Tap to see meaning</Text>
       
          </TouchableOpacity>  

    </View>
    );
    if(count%2==1)
    return(
        <View style={styles.fullbox}>
          <TouchableOpacity onPress={() => setCount(count+1)}  style={styles.box2}>
            
            <View style={styles.title}><Text style={styles.word2} >Word</Text></View>
           <Text style={styles.adj}>Adj</Text>
           <Text style={styles.pronounce} >phát âm</Text>
           <Text style={styles.meaning}>meaning1, meaning2</Text>
           <View style={styles.context}>
           <Text style={styles.contextTitle}>Context</Text>
           <View><Text >dmasiodjas dasiodo n dioasn</Text></View>
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
        flex:1,
    },
    box:{
        width:'95%',
        height:'90%',
        borderRadius: 4,
        borderColor:'#2B83B2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    box2:
    {
        width:'95%',
        height:'90%',
        borderRadius: 4,
        borderColor:'#2B83B2',
        borderWidth: 1,
        alignItems: 'center',
    },
    word:{
        fontSize:30,
        fontWeight:"bold",
       
    },
    title:
    {
        backgroundColor:'#2B83B2',
        width:'100%',
        alignItems: 'center',
    },
    word2:{
        fontSize:30,
        fontWeight:"bold",
        color:'white',
     

    },
    adj:
    {
          marginTop:10,
            fontSize:15,
            color:'#cdccd5',
    },
    pronounce:
    {
        marginTop:5,
        color:"#2B83B2",
        marginTop:10,
    },
    meaning:
    {
        fontWeight:"bold",
        marginTop:10,
    },
    context:
    {
        marginTop:10,
        alignItems: 'center',
        width:'95%',
        backgroundColor:'#bae9d9',
        padding:5,
    },
    tap:
    {
          marginTop:100,
            fontSize:20,
            color:'#c7ebe6',
           
    },
    contextTitle:
    {
        fontWeight:"bold",
    },

})  