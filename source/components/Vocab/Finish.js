import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function Finish(props){
    return(
        <View style={styles.fullbox}>
      
        <Text style={styles.score}>{props.score}/{props.sum}</Text>
           <TouchableOpacity style={styles.finishButton} onPress={() => props.navigation.navigate(props.route)}> 
    <Text style={styles.finishText}>Finish</Text>

     
        </TouchableOpacity>  

  </View>
    )
}


const styles = StyleSheet.create({
 
    fullbox:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:'#2B83B2',
    },

 
   
 score:
{
color:"white",
padding:20,
fontSize:100,
fontWeight:"bold",

},
finishButton:
{
    backgroundColor:"#6b9ed6",
    borderRadius: 4,

},
finishText:
{
    color:"white",
    padding:10,
    paddingHorizontal:30,
    fontSize:20,
    fontWeight:"bold",
  
    
    
},


})  