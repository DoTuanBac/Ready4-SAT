import React,{ useState } from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function ForgotScreen(){
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return(
        <LinearGradient style={styles.fullbox}   colors={[ '#082e38','#118cad']}> 
        <Text style={{color:'white',fontSize:20,fontWeight:"bold",marginTop:35}}>Forgot password?</Text>
        <TextInput
      style={{ width:'70%',height: 40, borderBottomColor: 'white',color:'white', borderBottomWidth: 1 }}
      onChangeText={text => onChangeEmail(text)}
      placeholder="Email"
      placeholderTextColor="white"

    />
  
          <TouchableOpacity style={{  width:'70%',height: 40,borderRadius:4,backgroundColor:'#b5b5b5',marginTop:25,alignItems: 'center',justifyContent:"center"}}  >
             <Text style={{color:"white",fontSize:16}}>Reset Password</Text>
            </TouchableOpacity>
     
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    fullbox:
    {
        flex: 1, 
            alignItems: 'center',

    },
})