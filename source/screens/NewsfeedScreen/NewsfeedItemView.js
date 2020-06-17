import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NewsfeedItemView(props) {

    const { schoolName, date, image, title, navigation } = props;

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.schoolImage}
                        source={{
                            uri: { image }
                        }}
                    />
                    <View style={styles.school}>
                        <Text style={styles.schoolName}>{schoolName}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>

                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: { image }
                    }}
                />
                <View style={styles.footer}>
                    <View style={styles.left}>
                        <Icon name="favorite_border" />
                        <Text>123</Text>
                    </View>
                    <View style={styles.right}>
                        <Icon name="share" />
                        <Icon name="book" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        
    },
    schoolImage: {
        height: 40,
        width: 40,
        padding: 5,
    },
    school: {
        paddingLeft: 5,
    },
    schoolName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    date: {
        fontSize: 14,
        color: "black",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    image: {
        height: 150,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
    },
    left: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
    },
    right: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
    },
});
