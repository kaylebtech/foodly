import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonComponent({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",  
    bottom: 80,             
    alignSelf: "center",    
    backgroundColor: "#02C543", 
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: 350,
    height: 50,
    borderRadius: 46,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "semiBold",
    textAlign: "center"
  },
});