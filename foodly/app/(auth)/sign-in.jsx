import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AuthButtonComponent from "../components/authButton";
import ButtonComponent from "../components/button";
import { Text, Image, View, Button, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import DividerWithor from "../components/divider";






export default function AuthLayout () {
    const router = useRouter ();
    return(
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#1E1E1E" }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            <SafeAreaView style={{ paddingHorizontal: '10%', paddingTop: 20}}>
            <Image style={{
                height: 302,
                width: 348.74,
                alignSelf: "center",
                top: 15
            }} source={require("../../assets/images/Group 2 (1).png")}/>

            <View>
                <Text style={{
                    fontFamily: "medium",
                    fontSize: 50,
                    color: "#ffffff",
                    textAlign: "center",
                    marginTop: 30
                }}>Let's You In</Text>
            </View>

            <View>

                <AuthButtonComponent 
                title="Continue with Facebook"
                onPress={() => console.log("Facebook pressed")}
                icon={require("../../assets/images/facebook (2).png")} />

                <AuthButtonComponent
                title="Continue with Google"
                onPress={() => console.log("Google pressed")}
                icon={require("../../assets/images/google (1).png")} />

                <AuthButtonComponent
                title="Continue with Google"
                onPress={() => console.log("Apple pressed")}
                icon={require("../../assets/images/apple-logo (1).png")} />

            </View>



            <DividerWithor  />

            

                <ButtonComponent 
                title="Sign in with Contact Number"
                onPress={() => router.push("/(auth)/sign-in-number")}/>

                <View style={{flexDirection: "row",  alignSelf: "center",  top: 70 }}>
                <Text style={{color: "#ffffff"}}>Create a new account </Text>
                <Text style={{color: "green"}}
                onPress={() => router.push("/(auth)/sign-up") }>Sign UP </Text>
            </View>


        </SafeAreaView>

        </ScrollView>

        </KeyboardAvoidingView>
    )
} 