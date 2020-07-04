import React from "react";
import {View, Text, StyleSheet, Platform, TouchableOpacity, Modal} from "react-native";
import {AntDesign, Entypo, SimpleLineIcons} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function MyTestScreen(props) {
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);
    const [testVisible, setTestVisible] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const modalHeader = (
        <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>SAT Target Score</Text>
            <View style={styles.divider}/>
        </View>
    );

    const modalBody = (
        <View style={styles.modalBody}/>
    );

    const modalHeaderFinal = (
        <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>SAT Final Score</Text>
            <View style={styles.divider}/>
        </View>
    );

    const modalFooter = (
        <View style={styles.modalFooter}>
            <TouchableOpacity style={{...styles.actions,backgroundColor:"#05B5CC"}}
                              onPress={() => { setModalVisible(!modalVisible) }}>
                <Text style={styles.actionText}>OK</Text>
            </TouchableOpacity>
        </View>
    );

    const modalScore=(
        <View style={styles.modalContainer}>
            {modalHeader}
            {modalBody}
            {modalFooter}
        </View>
    );

    const modalFinalScore=(
        <View style={styles.modalContainer}>
            {modalHeaderFinal}
            {modalBody}
            <View style={styles.modalFooter}>
                <TouchableOpacity style={{...styles.actions,backgroundColor:"#05B5CC"}}
                                  onPress={() => { setVisible(!visible) }}>
                    <Text style={styles.actionText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const modalOfficial = (
        <TouchableOpacity style={styles.modalContainer} onPress={() => { setTestVisible(!testVisible) }}>
            <View style={{padding: 20,}}>
                <Text style={{fontSize: 18, color: '#075769'}}>Official SAT- If you haven't yet signed up for the SAT, you can do so on the https://collegereadiness.collegeboard.org/sat website. Choose your date carefully, and make sure you have as much time as possible to study beforehand.</Text>
            </View>
            <View style={styles.modalFooter}>
                <View style={{...styles.actions,backgroundColor:"#f9fafb", marginRight: -5,}}>
                    <Text style={{color: '#05B5CC'}}>GOT IT!</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <TouchableOpacity style={styles.header} onPress={()=> setTestVisible(true)}>
                <Text style={styles.title}>Official Test</Text>
                <AntDesign name="infocirlceo" size={15} color="#14ccff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.detail} onPress={()=> setShow(!show)}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <Text style={{color: '#069bcc', fontSize: 20}}>SAT</Text>
                    <Entypo name="calendar" size={20} color="#069bcc" />
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 5,}}>
                    <AntDesign name="calendar" size={20} color="#050430" />
                    <View style={{flexDirection: "column", marginLeft: 10,}}>
                        <Text style={{color: 'gray', fontSize: 10, marginBottom: 3,}}>Target Date</Text>
                        <Text style={{color: '#050430'}}>{date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()}</Text>
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.score} onPress={() => setModalVisible(true)}>
                <SimpleLineIcons name="star" size={20} color="#050430" />
                <View style={{flexDirection: "column", marginLeft: 10,}}>
                    <Text style={{color: 'gray', fontSize: 10, marginBottom: 3,}}>Target Score</Text>
                    <Text style={{color: '#050430'}}>1390</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.score} onPress={() => setVisible(true)}>
                <AntDesign name="flag" size={20} color="#050430" />
                <Text style={{color: 'gray', marginLeft: 10, height: 26, marginTop: 10,}}>Final Score</Text>
            </TouchableOpacity>

            {/*Official Test Modal*/}
            <Modal
                transparent={true}
                visible={testVisible}
            >
                <View style={styles.modal}>
                    <View>
                        {modalOfficial}
                    </View>
                </View>
            </Modal>

            {/*Target Score Modal*/}
            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View>
                        {modalScore}
                    </View>
                </View>
            </Modal>

            {/*Final Score Modal*/}
            <Modal
                transparent={true}
                visible={visible}
            >
                <View style={styles.modal}>
                    <View>
                        {modalFinalScore}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
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
    },
    modal:{
        backgroundColor:"#00000099",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer:{
        backgroundColor:"#f9fafb",
        width:"80%",
        borderRadius:2,
        marginBottom: 50,
    },
    modalHeader:{
        width: '80%',
    },
    modalBody:{
        backgroundColor:"#f9fafb",
        paddingVertical:5,
        paddingHorizontal:170
    },
    modalTitle:{
        fontWeight:"bold",
        fontSize:20,
        padding:15,
    },
    modalFooter:{
        alignItems: 'flex-end',
        padding: 10,
    },
    actions:{
        borderRadius:5,
        marginHorizontal:10,
        paddingVertical:10,
        paddingHorizontal:20
    },
    actionText:{
        color:"#fff",
    },
});
