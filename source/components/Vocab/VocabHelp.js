import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function VocabHelp(){
    const [count, setCount] = useState(0);
  
    if(count%2==0)
    return(

          <TouchableOpacity onPress={() => setCount(count+1)}  style={styles.box}>
           <Text style={styles.word} >Welcome to Ready4's{'\n'}Sat Vocabulary Practice</Text>
          <View style={{marginTop:25,}}>
           <Text style={styles.adj}> <AntDesign name="checkcircleo" size={24}  /> Study hundreds of Sat vocabulary words</Text>
           <Text style={styles.adj}> <AntDesign name="checkcircleo" size={24}  /> Learn from in-depth definitions and tips </Text>
           <Text style={styles.adj}> <AntDesign name="checkcircleo" size={24}  /> Master new words quickly</Text>
           </View>
           <Text style={styles.tap}>Tap to get stared</Text>
       
          </TouchableOpacity>  


    );
    if(count%2==1)
    return(

          <TouchableOpacity onPress={() => setCount(count+1)}  style={styles.box2}>
            
            <View style={styles.title}><Text style={styles.word2} >For each vocabulary card</Text></View>

           <View style={styles.context}>
           <Text style={styles.contextTitle}>1</Text>
           <View><Text >View the word</Text></View>
           </View>
           <View style={styles.context}>
           <Text style={styles.contextTitle}>2</Text>
           <View><Text >Tao on the card to reveal the definition</Text></View>
           </View>
           <View style={styles.context}>
           <Text style={styles.contextTitle}>3</Text>
           <View><Text >Select how well hou knew the definition</Text></View>
         
           <View style={styles.bottom}>
           <View  style={styles.bottombutton} >
                <AntDesign name="closecircleo" size={24} color="red" />
                    <Text style={{color:"red"}}>Don't know</Text>    
                </View>
             
                <View  style={styles.bottombutton} >
                <AntDesign name="checkcircleo" size={24} color="green" />
                    <Text style={{color:"green"}}>Master</Text>    
                </View> 
                
                </View>
           </View>
          </TouchableOpacity>  


    );

}


const styles = StyleSheet.create({
    bottom:
    {
   
        borderColor:'#05B5CC',
        width:'100%',
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottombutton:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        fontSize:25,
        fontWeight:"bold",
        textAlign:'center',
       
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
          marginTop:25,
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