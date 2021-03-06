import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,} from 'react-native'

export default function VocabDetail(props){
    const [count, setCount] = useState(0);

    if(count%2==0)
    return(

          <TouchableOpacity onPress={() => setCount(count+1)}  style={styles.box}>
           <Text style={styles.word} >{props.word.word}</Text>
           <Text style={styles.adj}>{props.word.category}</Text>
           <Text style={styles.pronounce}>{props.word.pronounce}</Text>
           <Text style={styles.tap}>Tap to see meaning</Text>

          </TouchableOpacity>


    );
    if(count%2==1)
    return(

          <TouchableOpacity onPress={() => setCount(count+1)}  style={styles.box2}>

            <View style={styles.title}><Text style={styles.word2} >{props.word.word}</Text></View>
           <Text style={styles.adj}>{props.word.category}</Text>
           <Text style={styles.pronounce} >{props.word.pronounce}</Text>
           <Text style={styles.meaning}>{props.word.explain}</Text>
           <View style={styles.context}>
           <Text style={styles.contextTitle}>{props.word.context}</Text>
           <View><Text >{props.word.explainContext}</Text></View>
           </View>
          </TouchableOpacity>


    );

}


const styles = StyleSheet.create({

    box:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    box2:
    {
        width:'100%',
        height:'100%',
        alignItems: 'center',
    },
    word:{
        fontSize:30,
        fontWeight:"bold",

    },
    title:
    {
        backgroundColor:'#05B5CC',
        width:'100%',
        alignItems: 'center',
    },
    word2:{
        fontSize:15,
        padding:5,
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
        marginTop:10,
        color:"#2B83B2",
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
