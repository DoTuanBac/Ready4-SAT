import React,{ useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { AntDesign, SimpleLineIcons, Feather } from '@expo/vector-icons'
import ProcessBar from '../components/Practice/ProcessBar'
import CountDown from '../components/Practice/CountDown'

export default function TestDetailScreen({navigation}){
    const initQuestions = [
        {id: 1, title: 'Question 1', options: ['option A of Question 1', 'option A of Question 1', 'option C of Question 1', 'option D of Question 1']},
        {id: 2, title: 'Question 2', options: ['option A of Question 2', 'option A of Question 2', 'option C of Question 2', 'option D of Question 2']},
        {id: 3, title: 'Question 3', options: ['option A of Question 3', 'option A of Question 3', 'option C of Question 3', 'option D of Question 3']},
        {id: 4, title: 'Question 4', options: ['option A of Question 4', 'option A of Question 4', 'option C of Question 4', 'option D of Question 4']},
        {id: 5, title: 'Question 5', options: ['option A of Question 5', 'option A of Question 5', 'option C of Question 5', 'option D of Question 5']},
    ]

    const [questions, setQuestion] = useState(initQuestions.map(element =>
        ({...element, answer: ''})
    ))
    const [index, setIndex] = useState(1)

    // HEADER CLOCK COUNT DOWN
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Text style={{color: 'white', paddingLeft: 10}}>
                    End
                </Text>
            ),
            headerTitle: () => (
                <CountDown duration={300}/>
            ),
            headerRight: () => (
                <Feather name={'bookmark'} size={25} color={'white'}/>
            ),
        });
    }, [navigation])
    console.log(questions)
    console.log(index)

    return(
        <View style={styles.container}>
            <ProcessBar
                questions = {questions}
                setQuestion = {setQuestion}
                setIndex = {setIndex}
                index = {index}
            />
            <ScrollView>
            <View>
                <View style={styles.questionContainer}>
                    <Text>{questions[index -1].title}</Text>
                </View>
                <FlatList
                    data = {questions[index - 1].options}
                    renderItem = {({item, index}) => (
                        <View style={styles.row}>
                            <View style={styles.answer}>
                                <Text style={{color: 'grey'}}>{String.fromCharCode(65 + index)}</Text>
                            </View>
                            <View style={styles.answerForm}>
                                <TouchableOpacity
                                    onPress = {() => setQuestion(questions.map((element) =>
                                        element.id === (index) ?
                                        {...element, answer: item} :
                                        element
                                    ))}
                                >
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
            </ScrollView>
            {/* BOTTOM CONTROLLER */}
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => {
                    setIndex(index - 1)
                    setQuestion(questions.map(element =>
                        element.id === index ?
                        {...element, isIndex: true} :
                        {...element, isIndex: false}
                    ))
                }}>
                    <AntDesign name="left" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <AntDesign name="bulb1" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <SimpleLineIcons name="size-fullscreen" size={16} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Calculator')}}>
                    <AntDesign name="calculator" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setIndex(index + 1)
                    setQuestion(questions.map(element =>
                        element.id === index ?
                        {...element, isIndex: true} :
                        {...element, isIndex: false}
                    ))
                }}>
                    <AntDesign name="right" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    questionContainer: {
        backgroundColor: '#ADD8E6',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottom: {
        position: 'absolute',
        bottom:0,
        backgroundColor: '#0E2C3D',
        width: '100%',
        borderBottomEndRadius: 4,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    answer: {
        height: 20,
        width: 20,
        borderRadius: 30,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerForm: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginRight: 10,
    }
});
