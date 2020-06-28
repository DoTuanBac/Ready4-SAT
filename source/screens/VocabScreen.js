import React,{ useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList, } from 'react-native'
import VocabCategories from '../components/Vocab/VocabCategories'
import {Word} from '../data/word'
export default function VocabScreen({navigation}){


    return(
      <View style={styles.fullbox}>
               <FlatList
        data={Word}
        renderItem={({ item }) => <VocabCategories navigation={navigation} item={item} />}
        keyExtractor={item => item.id}
        style={styles.box}
      />


    </View>
    );


}


const styles = StyleSheet.create({
  fullbox:
  {
      flex: 1,
      justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"white",

  },
  box:
  {
      width:'100%',
  }

})
