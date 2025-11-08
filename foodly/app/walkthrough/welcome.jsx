import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import {  useRouter } from "expo-router";

export default function Index() {
  const router = useRouter ();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/pizza1.png")}
        style={{ flex: 1, height: 922, width: 615, top: -48, left: -48,}}
      >
  
        <Image
          source={require("../../assets/images/Rectangle 1 (1).png")}
          style={{
             width: 460, 
             height: 430, 
             bottom: -502
          }}
        />


        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              right: 56,
              fontSize: 50,
              fontWeight: "semiBold",
              color: "#02C543",
              textAlign: "center",
            }}
          >
            Welcome to {"\n"} Foodies!
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#ffffff",
              marginTop: 10,
              fontFamily: "medium",
              right: 24
            }}
          >
            Enjoy the best dishes, crafted with care and delivered with speed. Taste happiness in every bite.
          </Text>
  
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#00C853", // bright green
              paddingVertical: 15,
              paddingHorizontal: 40,
              borderRadius: 30,
              marginTop: 20,
              width: 275,
              height: 50,
              flexDirection: "row",
              alignItems: "center",
              left: 250
            }}
            onPress={() => router.replace ('walkthrough/walkthrough_1')}
          >

            <Image style={{height: 48, width: 48, right: 35}} source={require("../../assets/images/Group 13.png")}/>

            <Text
              style={{
                color: "#fff",
                fontWeight: "semiBold",
                width: 131,
                fontSize: 20,
                textAlign: "center",
                right: 40
              }}
            >
              Get Started..!
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}