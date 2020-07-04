import React,{ useState } from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
export default function LoginScreen({navigation}){
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return(

        <LinearGradient style={styles.fullbox}   colors={[ '#082e38','#118cad']}>

        <Text style={{color:'white',fontSize:20,fontWeight:"bold",marginTop:35}}>Login</Text>
        <TextInput
      style={{ width:'70%',height: 40, borderBottomColor: 'white',color:'white', borderBottomWidth: 1,marginTop:25, }}
      onChangeText={text => onChangeEmail(text)}
      placeholder="Email"
      placeholderTextColor="white"

    />
     <TextInput
      style={{ width:'70%',height: 40, borderBottomColor: 'white',color:'white',borderBottomWidth: 1,marginTop:25, }}
      onChangeText={text => onChangePassword(text)}
      placeholder="Password"
      placeholderTextColor="white"
      secureTextEntry={true}
    />
          <TouchableOpacity style={{  width:'70%',height: 40,borderRadius:4,backgroundColor:'#b5b5b5',marginTop:25,alignItems: 'center',justifyContent:"center"}}  
          onPress={() => navigation.navigate('Home')}
          >
             <Text style={{color:"white",fontSize:16}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}}  onPress={() => navigation.navigate('Forgot')}>
                <Text style={{color:'white',}}>Forgot password?</Text>
            </TouchableOpacity>
                <View style={{borderBottomWidth: 1, borderBottomColor: "white", width: '70%', height: 10}}/>
                <View style={{width:'70%' ,backgroundColor:"#3b5998",padding:10,marginTop:20,flexDirection: 'row',borderRadius:4,}}>
                <FontAwesome name="facebook" size={24} color="white" />
                    <Text style={{color:'white',padding:2.5,marginLeft:10,}}>Facebook</Text>
                    </View>
                <View style={{width:'70%' ,backgroundColor:"#D44638",padding:10,marginTop:20,borderRadius:4,flexDirection: 'row',}}>
                <MaterialCommunityIcons name="gmail" size={24} color="white" />
                    <Text  style={{color:'white',padding:2.5,marginLeft:10,}}>Gmail</Text>
                    </View>
                    <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Register')}>
                        <Text style={{color:'white'}}>Create New Account</Text></TouchableOpacity>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    fullbox: {
        flex: 1,
        alignItems: 'center',
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom:0,
        width:'100%',
        padding:10,
    },
})
