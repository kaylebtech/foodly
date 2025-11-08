import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash() {
  useEffect(() => {
    const go = async () => {

      await new Promise((r) => setTimeout(r, 1500));


      const seen = await AsyncStorage.getItem("seenOnboarding"); 
      const authed = await AsyncStorage.getItem("authToken"); 

      if (!seen) return router.replace("/walkthrough/welcome");
      if (!authed) return router.replace("/(auth)/sign-up");

      return router.replace("/searchPage"); 
    };
    go();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 188.65,
            height: 150,
            resizeMode: "contain",
            marginBottom: 12,
          }}
          source={require("../assets/images/logo.png")}
        />

        <Text
          style={{
            color: "white",
            fontSize: 36,
            textAlign: "center",
            
            fontFamily: "Regularr",
          }}
        >
          <Text>Food</Text>
          <Text style={{ color: "#2B964F" }}>ies</Text>
        </Text>
      </View>


      <View style={{ position: "absolute", left: 0, right: 0, bottom: 40 }}>
        <Image
          style={{
            height: 50,
            width: 50,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={require("../assets/images/loading 1.png")}
        />
      </View>
    </SafeAreaView>
  );
}