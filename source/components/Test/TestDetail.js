import React from "react";
import { View, Text,StyleSheet, } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default function TestDetail(props){
    
    if(!props.check)
    return(
        <View style={styles.fullbox}>
       <Text style={styles.title} >{props.question.title}</Text>
            <Text style={styles.question} >{props.question.question}</Text>

             <RadioForm
          radio_props={props.question.answers}
          initial={-1}
          onPress={(value) => {value}}
          buttonSize={10}
          style={styles.radiobtn}
        
             />


  </View>
    )
    else{
        return(
            <View style={styles.fullbox}>
           <Text style={styles.title} >{props.question.title}</Text>
                <Text style={styles.question} >{props.question.question}</Text>
    
                <RadioForm animation={true} style={styles.radiobtn} >
  {
    props.question.answers.map((obj, i) => (
      <RadioButton  >   
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={ props.question.correct == i}
          buttonColor={props.question.correct == i?'red':'#2196f3'}


          buttonSize={10}
          
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
          labelWrapStyle={{}}
          labelColor={props.question.correct == i?'red':'#2196f3'}

        />
      </RadioButton>
    ))
  }  
</RadioForm>
<Text style={styles.answer} >Correct: {props.question.answers[props.question.correct].label}</Text>
    
      </View>
        );
    }
}
const styles = StyleSheet.create({
    fullbox:
    {
        flex:1,
 
    },
 
    title:
    {
        backgroundColor:'#2B83B2',
        textAlign: 'center',
        width:'100%',
        fontSize:20,
        fontWeight:"bold",
        color:'white',
    },


    question:
    {
       fontSize:16,
        fontWeight:"bold",
        backgroundColor:"#00ffff",
        width:'100%',
        padding:10,
        fontSize:15,
        
    },
    
    radiobtn:
    {
        padding:10,
    },
    answer:
    {
        color:"red",
        padding:10,
        fontSize:15,
        fontWeight:"bold",
    },
})  