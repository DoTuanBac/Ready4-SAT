import React, { useState, useEffect } from 'react'
import { View, Text} from 'react-native'

export default function CountDown(props){
    const [timer, setTimer] = useState(props.duration)
    const [countDown, setCountDown] = useState('')

    const displayTimer = () => {
        let time = timer 
        let minutes = Math.floor(time / 60)
        let seconds = Math.floor(time % 60)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        
        return minutes + ':' + seconds
    }

    useEffect(() => {
        setTimeout(() => {
            setCountDown(displayTimer())
            setTimer(timer - 1)
        }, 1000)
    }, [timer])

    return(
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
            {countDown}
        </Text>
    )
}