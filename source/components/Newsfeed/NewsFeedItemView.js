import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function NewsFeedItemView(props) {

    const { schoolName, date, title, navigation } = props;

    const [count, setCount] = useState(123);
    const [click, setClick] = useState(1);

    const handleLike = () => {
        let updateClick = click +1;
        if(updateClick%2 === 0){
            let updateCount = count + 1;
            setCount(updateCount);
            setClick(updateClick);
        }
        else {
            setCount(count - 1);
            setClick(updateClick);
        }
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('NewsFeedDetail')}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.schoolImage}
                        source={{uri: 'https://reactjs.org/logo-og.png'}}
                    />
                    <View style={styles.school}>
                        <Text style={styles.schoolName}>{schoolName}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>

                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{uri: 'https://thumbs.dreamstime.com/b/image-wood-texture-boardwalk-beautiful-autumn-landscape-background-free-copy-space-use-background-backdrop-to-132997627.jpg'}}
                />
                <View style={styles.footer}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={handleLike}>
                            {
                                (click%2===0) ?
                                    <AntDesign name="heart" size={14} color="black"/> :
                                    <AntDesign name="hearto" size={14} color="black"/>
                            }
                        </TouchableOpacity>
                        <Text style={styles.tym}>{count}</Text>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity onPress={handleLike}>
                            <AntDesign name="hearto" size={14} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 6,}} onPress={handleLike}>
                            {
                                (click%2===0) ?
                                    <AntDesign name="heart" size={14} color="black"/> :
                                    <AntDesign name="hearto" size={14} color="black"/>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        //height: 300,
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 8,
        //borderWidth: 1,
        //borderColor: "black",
        elevation: 5,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",

    },
    schoolImage: {
        height: 40,
        width: 40,
        margin: 5,

    },
    school: {
        marginLeft: 5,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    schoolName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    date: {
        fontSize: 12,
        color: "gray",
    },
    title: {
        fontSize: 20,
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
        marginLeft: 8,
        paddingTop: 10,
        paddingBottom: 10,
    },
    right: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 8,
        paddingTop: 10,
        paddingBottom: 10,
    },
    tym: {
        fontSize: 18,
        marginLeft: 6,
        marginBottom: 2,
    }
});
