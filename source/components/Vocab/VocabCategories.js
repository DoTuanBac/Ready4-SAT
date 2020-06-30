import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import ProgressBar from '../Home/ProgressBar'
import VocabItem from './VocabItem'
import {getMasteredCategories,getPercentCategories} from './VocabCaculator'
export default function VocabCategories(props){

    const [count, setCount] = useState(0);

    if(count%2===1)
    return(
        <View  style={styles.fullbox2}>
        <TouchableOpacity  style={styles.box} onPress={() => setCount(count+1)} >

            <Text style={styles.basicWord}>{props.item.name}</Text>
        <Text style={styles.mastered}>{getMasteredCategories(props.item.categories)} Mastered</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar borderColor='#0084ad' backgroundColor='#a1e6f0' percent={getPercentCategories(props.item.categories)}/>
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
        </View>
    );
    if(count%2===0)
    return(
        <View  style={styles.fullbox1}>
        <TouchableOpacity  style={styles.box2} onPress={() => setCount(count+1)} >

            <Text style={styles.basicWord2}>{props.item.name}</Text>
            <Text style={styles.mastered2}>{getMasteredCategories(props.item.categories)} Mastered</Text>
            <View style={styles.progressBarContainer}>
                <ProgressBar borderColor='#a1e6f0' backgroundColor='#a1e6f0' percent={getPercentCategories(props.item.categories)}/>
            </View>



        </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({
    fullbox1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    fullbox2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    listbox: {
        width:'98%',
        paddingTop: 10,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
        backgroundColor: '#0a566b',
        width:'100%',
    },
    box2: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
        borderColor: '#5ca2ab',
        borderWidth:0.8,
        width:'97%',
        marginVertical:10,
        //borderRadius:10,
    },
    progressBarContainer : {
        margin:10,
        width:'90%',
        marginBottom: 20,
    },
    basicWord: {
        fontSize: 25,
        fontWeight:'bold',
        margin:5,
        color:'white',
    },
    basicWord2: {
        fontSize: 25,
        fontWeight:'bold',
        margin:5,
        color:'gray',
    },
    mastered: {
        fontSize: 15,
        margin:5,
        color:'white',
    },
    mastered1: {
        fontSize: 15,
        margin:5,
    },
})
