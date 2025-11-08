import { Image, StyleSheet, TouchableOpacity } from "react-native";





export default function BackgroundColorImage ({icon, onPress, backgroundColor}) {
    return(
        <TouchableOpacity style={[styles.box, { backgroundColor: backgroundColor || "#01040F"} ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    box: {
        width: 83,
        height: 65,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8

    },

    icon: {
        width: 30,
        height: 30
    }
})