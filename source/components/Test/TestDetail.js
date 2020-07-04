import React,{ useState } from 'react'
import { View, Text,StyleSheet, } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ProgressBar from '../../components/Home/ProgressBar'

export default function TestDetail(props){
  const [checked, setChecked] = useState(-1);

    if(!props.check)
        return(
            <View style={styles.fullbox}>
               <View style={styles.title} >
                   <Text style={{color:'white',marginTop:5,}}>{props.progress}</Text>
                    <View style={styles.progessbar}>
                        <ProgressBar   percent={props.progress}/>
                    </View>
               </View>
                <Text style={styles.question} >{props.question.question}</Text>
                <RadioForm animation={true} style={styles.radiobtn} >
          {
            props.question.answers.map((obj, i) => (
              <RadioButton  style={styles.button} >
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={checked==i}
                  buttonColor={checked == i?'green':'#000000'}
                  onPress={() => setChecked(i)}
                  buttonSize={10}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  labelWrapStyle={{}}
                  labelColor={checked === i?'green':'#000000'}
                  onPress={() => setChecked(i)}
                />
              </RadioButton>
            ))
          }
    </RadioForm>

      </View>
        );
    else{
        return(
            <View style={styles.fullbox}>

        <View style={styles.title} >
        <Text style={{color:'white',marginTop:5,}}>{props.progress}</Text>
          <View style={styles.progessbar}>
              <ProgressBar   percent={props.progress}/>
          </View>
        </View>
                <Text style={styles.question} >{props.question.question}</Text>

                <RadioForm animation={true} style={styles.radiobtn} >
  {
    props.question.answers.map((obj, i) => (
      <RadioButton  style={styles.button} >
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={ props.question.correct === i}
          buttonColor={props.question.correct === i?'red':'#000000'}
          buttonSize={10}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
          labelWrapStyle={{}}
          labelColor={props.question.correct === i?'red':'#000000'}
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
    fullbox: {
        flex:1,
    },

    title: {
        backgroundColor:'#0E2C3D',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    progessbar: {
      width:'90%',
      marginBottom:15,
    },

    question: {
       fontSize:16,
        fontWeight:"bold",
        backgroundColor:"#f0f0f0",
        width:'100%',
        padding:10,
    },

    radiobtn: {
        padding:10,
    },

    answer: {
        color:"red",
        padding:10,
        fontSize:15,
        fontWeight:"bold",
    },

    button: {
      width:'100%',
      borderColor:"black",
      borderBottomWidth:1,
      padding:10,
    }
})
