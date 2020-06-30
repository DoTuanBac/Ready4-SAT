import {Text, View} from "react-native";
import React from "react";
import {styles} from "../../screens/MyTestScreen";

export const modalHeader = (
    <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>SAT Target Score</Text>
        <View style={styles.divider}/>
    </View>
);

export const modalBody = (
    <View style={styles.modalBody}/>
);

export const modalHeaderFinal = (
    <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>SAT Final Score</Text>
        <View style={styles.divider}/>
    </View>
);

export const modalBodyOfficial = (
    <View style={styles.modalBody}>
        <Text> Official SAT- If you haven't yet signed up for the SAT, you can do so on the https://collegereadiness.collegeboard.org/sat website. Choose your date carefully, and make sure you have as much time as possible to study beforehand.</Text>
    </View>
)

