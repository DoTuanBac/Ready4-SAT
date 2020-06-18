import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NewsfeedItemView(props) {

    const { schoolName, date, title, navigation } = props;

    const [count, setCount] = useState(123); 

    const handleLike = () => {
        let updateCount = count + 1;
        setCount(updateCount);
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('NewsfeedDetail')}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.schoolImage}
                        source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    />
                    <View style={styles.school}>
                        <Text style={styles.schoolName}>{schoolName}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>

                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/image-wood-texture-boardwalk-beautiful-autumn-landscape-background-free-copy-space-use-background-backdrop-to-132997627.jpg' }}
                />
                <View style={styles.footer}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={handleLike}>
                            <Icon name="favorite" />
                        </TouchableOpacity>
                        <Text style={styles.tym}>{count}</Text>
                    </View>
                    <View style={styles.right}>
                        <Icon name="share" />
                        <Icon name="bookmark" />
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
        height: 50,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    left: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 5
    },
    right: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 5,
    },
    tym: {
        marginLeft: 5,
    }
});
