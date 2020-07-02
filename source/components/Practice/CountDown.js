import React, { useState } from 'react'
import { View, Text} from 'react-native'

export default function CountDown(props){
    // const [timer, setTimer] = useState(props.duration)
    let timer = props.duration

    return(
        <View>
            <Text style={{textAlign: 'center'}}>
                {
                    setInterval(() => {
                        return timer
                        timer--
                    }, 1000)
                }
            </Text>
        </View>
    )
}