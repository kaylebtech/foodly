import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text } from "react-native";
import ButtonComponent from "../components/button";
import { useRouter } from "expo-router";



export default function walkthrough() {
    const router = useRouter ();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#1E1E1E"}}>
            <Image style={{width: 350, height: 332.09, alignSelf: "center", top: 90}} source={require("../../assets/images/Group 4.png")}/>

            <Text style={{textAlign: "center", fontSize: 40, fontFamily: "medium", color: "#02C543", marginTop: 150}}>Easy Payment</Text>

            <Text style={{fontFamily: "medium",
                fontSize: 15,
                color: "#FFFFFF",
                marginTop: 20,
            }}>Enjoy the best dishes, crafted with care and delivered with speed. Taste happiness in every bite.</Text>

            <Image style={{height: 5, width: 50, alignSelf: "center", marginTop: 40}} source={require("../../assets/images/Frame 1 (2).png")}/>

            <ButtonComponent title="Next" onPress={() => router.replace("/walkthrough/walkthrough3")}/>


        </SafeAreaView>
    )
}