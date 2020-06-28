import React from "react";
import {View, Text, StyleSheet, Modal, Platform, TouchableHighlight} from "react-native";
import {AntDesign, Entypo, SimpleLineIcons} from "@expo/vector-icons";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import DateTimePicker from "@react-native-community/datetimepicker";

//const windowWidth = Dimensions.get('window').width;

export default function MyTestScreen(props) {
    const [date, setDate] = React.useState(new Date(1598051730000));
    const [show, setShow] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <View>
            <TouchableOpacity style={styles.header}>
                <Text style={styles.title}>Official Test</Text>
                <AntDesign name="infocirlceo" size={15} color="#14ccff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detail}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <Text style={{color: '#069bcc', fontSize: 20}}>SAT</Text>
                    <Entypo name="calendar" size={20} color="#069bcc" />
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 5,}}>
                    <AntDesign name="calendar" size={20} color="#050430" />
                    <View style={{flexDirection: "column", marginLeft: 10,}}>
                        <Text style={{color: 'gray', fontSize: 10, marginBottom: 3,}}>Target Date</Text>
                        <Text style={{color: '#050430'}}>date</Text>
                    </View>
                </View>
                {!show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.score}>
                <SimpleLineIcons name="star" size={20} color="#050430" />
                <View style={{flexDirection: "column", marginLeft: 10,}}>
                    <Text style={{color: 'gray', fontSize: 10, marginBottom: 3,}}>Target Score</Text>
                    <Text style={{color: '#050430'}}>1390</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.score} onPress={() => setVisible(!visible)}>
                <AntDesign name="flag" size={20} color="#050430" />
                <Text style={{color: 'gray', marginLeft: 10, height: 26, marginTop: 10,}}>Final Score</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <View style={{height: 50, width: 50,}} >
                        <Text>Modal</Text>
                        <TouchableHighlight
                            style={{backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setVisible(false);
                            }}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 12,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: '#edf3f5'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 4,
        color: '#050430',
    },
    detail: {
        //height: 90,
        flexDirection: "column",
        backgroundColor: '#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    score: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    }
});
