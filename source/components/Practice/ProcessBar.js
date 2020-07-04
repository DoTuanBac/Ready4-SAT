import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

export default function ProcessBar(props){
    return(
        <View style={styles.container}>
            <View style={[styles.questionsContainer, {width: '90%'}]}>
                {
                    props.questions.map((element) =>
                        <Text style={styles.questionNum}>{element.id}</Text>
                    )
                }
            </View>
            <View style={{width: '90%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.line}></View>
                <View style={styles.questionsContainer}>
                    <FlatList
                        data={props.questions}
                        renderItem = {({item}) => (
                            item.id === props.indexQuestion ?
                            <View style={styles.indexQuestionContainer}>
                                <View style={styles.indexQuestion}></View>
                            </View> :
                            item.answer ?
                            <TouchableOpacity
                                onPress={() => {
                                    props.setIndexQuestion(item.id)
                                    props.setQuestion(props.questions.map(element =>
                                        element.id === props.index ?
                                        {...element, isIndex: true} :
                                        {...element, isIndex: false}
                                    ))
                                }}
                            >
                                <View style={styles.checkQuestion}></View>
                            </TouchableOpacity> :
                            <TouchableOpacity
                                onPress={() => {
                                    props.setIndexQuestion(item.id)
                                    props.setQuestion(props.questions.map(element =>
                                        element.id === props.index ?
                                        {...element, isIndex: true} :
                                        {...element, isIndex: false}
                                    ))
                                }}
                            >
                            <View style={styles.uncheckQuestion}></View>
                            </TouchableOpacity>
                        )}
                        horizontal={true}
                        contentContainerStyle={styles.questionsContainer}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E2C3D'
    },
    line: {
        width: '100%',
        borderColor: '#05B5CC',
        borderBottomWidth: 1,
        position: 'absolute'
    },
    questionsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    uncheckQuestion: {
        height: 8,
        width: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#05B5CC',
        backgroundColor: '#0E2C3D'
    },
    checkQuestion: {
        height: 8,
        width: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#05B5CC',
        backgroundColor: '#05B5CC'
    },
    indexQuestion: {
        height: 8,
        width: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F1D513',
        backgroundColor: '#F1D513',
        position: 'absolute'
    },
    indexQuestionContainer: {
        height: 20,
        width: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#05B5CC',
        backgroundColor: '#0E2C3D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionNum: {
        color: '#05B5CC',
        marginBottom: 5,
        textAlign: 'center',
    },
})
