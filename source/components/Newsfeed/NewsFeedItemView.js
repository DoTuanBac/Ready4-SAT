import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, EvilIcons, Fontisto} from '@expo/vector-icons';
import Header from "./Header";

export default function NewsFeedItemView(props) {
    const { schoolName, date, title, navigation } = props;
    const [count, setCount] = useState(123);
    const [click, setClick] = useState(1);
    const [isChange, setChange] = useState(false);

    const handleGoToDetail = React.useCallback(() => {
        navigation.navigate('NewsFeedDetail', {
            schoolName,
            date,
            title,
        });
    },[navigation]);

    const handleLike = React.useCallback(() => {
        let updateClick = click +1;
        if(updateClick%2 === 0){
            setCount(count + 1);
            setClick(updateClick);
        }
        else {
            setCount(count - 1);
            setClick(updateClick);
        }
    },[click]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoToDetail}>
                <Header schoolName={schoolName} date={date} />

                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{uri: 'https://picsum.photos/id/103/367/267'}}
                />
            </TouchableOpacity>
            <View style={styles.footer}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={handleLike}>
                        {
                            (click%2 === 0) ?
                                <AntDesign name="heart" size={18} color="#14ccff"/> :
                                <AntDesign name="hearto" size={18} color="black"/>
                        }
                    </TouchableOpacity>
                    <Text style={styles.tym}>{count}</Text>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity style={{marginBottom: 6,}}>
                        <EvilIcons name="share-google" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 6, marginBottom: 5,}} onPress={()=> setChange(!isChange)}>
                        {
                            (isChange) ?
                                <Fontisto name="bookmark-alt" size={20} color="black" /> :
                                <Fontisto name="bookmark" size={20} color="black" />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 15,
        //borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 5,
        marginBottom: 5
    },
    image: {
        height: 200,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    left: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 10,
        paddingTop: 12,
        paddingBottom: 15,
    },
    right: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 18,
        paddingTop: 12,
        paddingBottom: 15,
    },
    tym: {
        fontSize: 18,
        marginLeft: 6,
        //marginBottom: 2,
    }
});
