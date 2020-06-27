import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ProgressBar(props){
    return(

     
         <View style={ styles.ProgressBar}>
            <View style={ {
                width: props.percent,
                backgroundColor: '#F1D513',
                height: 6,
                borderRadius: 3,
         
         } }>
            </View>
        </View>

      
    )
}

const styles = StyleSheet.create({
 
 
ProgressBar:
{
    height: 8,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
},

})