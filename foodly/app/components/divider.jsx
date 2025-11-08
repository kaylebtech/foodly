import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DividerWithor() {
    return(
        <View style={styles.container}>
            <View style={styles.line}/>
            <Text style={styles.text}> or </Text>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#cccccc",
    },
    text: {
        color: "#cccccc",
        textAlign: "center",
        fontFamily: "semiBold",
        fontSize: 15
    }
})