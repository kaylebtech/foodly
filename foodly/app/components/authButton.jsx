import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

export default function AuthButtonComponent({ title, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.content}>
            {icon && <Image source={icon} style={styles.icon} />}
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {  
    alignSelf: "center",    
    backgroundColor: "#01040F", 
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: 350,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "semiBold",
    textAlign: "center",
    left: 5
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 30,
    height: 30,
  }

});