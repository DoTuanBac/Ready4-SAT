import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function UnitList(props){
    return(
        <View style={styles.container}>
            {
                props.skill ?
                <View>
                    <Text style={{fontSize: 25, paddingTop: 5, paddingLeft: 15, color: 'white'}}>Unit Heading</Text>
                    <Text style={{fontSize: 15, paddingTop: 10, paddingLeft: 15, color: 'white'}}>Unit Sub-Heading</Text>
                </View> :
                <View></View>
            }
            <FlatList
                data={props.questions}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() =>props.navigation.navigate('Question',{questions:item.questions})}
                    >
                        <View style={styles.center}>
                            <Text style={{fontSize: 15, color:'#05B5CC'}}>{item.name}</Text>
                            <Entypo name='documents' color='#05B5CC' size={50}/>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor = {(item) => item.id}
                horizontal = {true}
                ListHeaderComponent={<View style={{paddingLeft: 50}}></View>}
                ListFooterComponent={<View style={{paddingLeft: 50}}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: '#05B5CC',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: 150,
        height: 100,
        borderRadius: 10,
        marginLeft: 6,
        backgroundColor: 'white',
        alignSelf: 'center'
    }
})
