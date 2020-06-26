import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList,ScrollView } from 'react-native'
import Avatar from '../components/LeaderBoard/Avatar'
import TopLeaderBoard from '../components/LeaderBoard/TopLeaderBoard'
import { LinearGradient } from 'expo-linear-gradient';
import {User} from '../data/user'

export default function LeaderboardScreen({navigation}){
    return(
  
        <LinearGradient style={styles.fullbox}   colors={[ '#0a566b','#14ccff']}> 
             {/* {/* <View style={styles.subHeader}>

                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text style={styles.contentText}>All time</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Vocab')}>
                    <Text style={styles.contentText}>Location</Text>    
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Ha Noi</Text> */}
            <View style={styles.BoxTop}>
              <TopLeaderBoard top={2} size={90} uri="https://reactnative.dev/img/tiny_logo.png"></TopLeaderBoard>  
                <TopLeaderBoard  top={1} size={120} uri="https://reactnative.dev/img/tiny_logo.png"></TopLeaderBoard>
               <TopLeaderBoard  top={3} size={60} uri="https://reactnative.dev/img/tiny_logo.png"></TopLeaderBoard>
             </View>    

             <ScrollView style={styles.box}>
        <FlatList 
        data={User}
        renderItem={({ item }) =>  
        <View style={styles.row}>
        <View style={styles.rowID}><Text style={{fontSize: 20,color:"white"} } >1</Text></View>
        <View style={styles.rowprofile} >
            <View style={styles.rowProfilecontent}>
            <Avatar size={40}  uri="https://reactnative.dev/img/tiny_logo.png" ></Avatar>
             <Text style={{fontSize: 20,color:"white",paddingHorizontal:5,}} >abc</Text>  
            </View>
            </View>
        <View style={styles.rowpoint} ><Text style={{fontSize: 20,color:"white"} } >998</Text></View>
      </View>


    }
        keyExtractor={item => item.id}

      />
              </ScrollView>
          
           
 
        </LinearGradient>
    )
    
}

const styles = StyleSheet.create({
    fullbox:
    {
        flex: 1, 
            alignItems: 'center',
        height:1,
    },
    box:
    {
        width:'100%',
        marginTop:10,
    },
     subHeader: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'90%',
        marginTop:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:8, 
    },
   contentText:
    {
        color:'white',


    }
    ,
    title:
    {
        color:'white',
        fontWeight:'bold',
        marginTop:10,
        fontSize:40,
    },
    BoxTop:
    {
  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:5,    
        width:'90%',
    },

    listBoard:
    {
        alignItems: 'center',
        width:'90%',
        marginTop:20,
        borderColor:'white',
        borderWidth:1,
        borderRadius:8, 
        flexDirection: 'row',
    },
row:
{
    flex: 1,
     flexDirection: 'row',
     borderTopColor:'white',
     borderWidth:0,
     borderTopWidth:1,
  

},
rowID:
{
    width: '10%',
     height: 50, 
     alignItems: 'center',
     justifyContent: 'center',
},
rowpoint:
{
    width: '20%',
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center',
},
rowprofile:
{
    width: '70%',
    height: 50, 

},
rowProfilecontent:
{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

},
 
    })