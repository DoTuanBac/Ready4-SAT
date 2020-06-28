import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import VocabDetail from '../components/Vocab/VocabDetail'
import Finish from '../components/Vocab/Finish'
import { AntDesign } from '@expo/vector-icons';

export default function VocabDetailScreen({route,navigation}){
    const {id}=route.params;
    const [count, setCount] = useState(id);
    const [score, setScore] = useState(0);
    const { words } = route.params;
    let x=0;
    for(let item of words)
    {
        if(count===x)
        {
            return(
                <View style={styles.fullbox}>
                    <View style={styles.box}>
                    <VocabDetail  word={item} />
                    <View style={styles.bottom}>
                        <TouchableOpacity  style={styles.bottombutton} onPress={() => setCount(count+1)}>
                            <AntDesign name="closecircleo" size={24} color="red" />
                            <Text style={{color:"red"}}>Don't know</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.bottombutton}
                            onPress={() => {setCount(count+1) && setScore(score+1)}}
                        >
                            <AntDesign name="checkcircleo" size={24} color="green" />
                            <Text style={{color:"green"}}>Master</Text>
                        </TouchableOpacity>
                    </View>
                  </View>
                </View>
            );
        }
        x++;
    }
     return(
        <Finish score={score} sum={x} route={"Vocab"} navigation={navigation}/>
     );
}


const styles = StyleSheet.create({
    fullbox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:"white",
    },
    box: {
        width:'95%',
        height:'90%',
        borderRadius: 4,
        borderColor:'#2B83B2',
        borderWidth: 1,

    },
    bottom: {
        position: 'absolute',
        bottom:0,
        borderColor:'#05B5CC',
        borderTopWidth:1,
        width:'100%',
        borderBottomEndRadius: 4,
        padding:10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottombutton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
