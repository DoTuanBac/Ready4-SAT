import React,{ useState } from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'; 
export default function RegisterScreen({navigation}){
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return(
        <LinearGradient style={styles.fullbox}   colors={[ '#082e38','#118cad']}> 
        <Text style={{color:'white',fontSize:20,fontWeight:"bold",marginTop:35}}>Sign up</Text>
        <Text  style={{color:'white',textAlign:'center',marginTop:20}}>Please create an account{'\n'}to save your progress.{'\n'}It's completely free.</Text>
        <View style={{width:'70%' ,backgroundColor:"#3b5998",padding:10,marginTop:20,flexDirection: 'row',borderRadius:4,}}>
                <FontAwesome name="facebook" size={24} color="white" />
                    <Text style={{color:'white',padding:2.5,marginLeft:10,}}>Facebook</Text>
                    </View>
                <View style={{width:'70%' ,backgroundColor:"#D44638",padding:10,marginTop:20,borderRadius:4,flexDirection: 'row',}}>
                <MaterialCommunityIcons name="gmail" size={24} color="white" />
                    <Text  style={{color:'white',padding:2.5,marginLeft:10,}}>Gmail</Text>
                    </View>
   
                <View style={{borderBottomWidth:1,borderBottomColor:"white",width:'70%',height:10,marginTop:10}}></View>
          
                <TouchableOpacity onPress={() => navigation.navigate('RegisterDetail')}
                style={{width:'70%' ,borderColor:"white",borderWidth:1,padding:10,marginTop:20,borderRadius:4,flexDirection: 'row',}}>
                <MaterialIcons name="mail-outline" size={24} color="white" />
                    <Text  style={{color:'white',padding:2.5,marginLeft:10,}}>Gmail</Text>
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
    bottom:
    {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom:0,
        width:'100%',
        padding:10,

        alignItems: 'center',

    },
})