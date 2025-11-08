
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Text, Image, View, TouchableOpacity, Alert, ActivityIndicator, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import InputComponent from "../components/input";
import ButtonComponent from "../components/button";


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase"; 

export default function SignIn() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const isPhone = (s) => {
    const digits = s.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15 && /^\+?\d+$/.test(s);
  };

  const handleSignIn = async () => {
    const raw = emailOrPhone.trim();
    if (!raw || !password.trim()) {
      Alert.alert("Error", "Please enter email/phone and password");
      return;
    }


    if (isPhone(raw)) {
      Alert.alert(
        "Phone sign-in",
        "This input looks like a phone number. Use the phone sign-in flow (OTP)."
      );
      return;
    }


    if (!raw.includes("@")) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, raw, password);
      console.log("Signed in:", res.user.uid);

      router.replace("/(home)/homes");
    } catch (err) {
      console.log("signin error =>", err); 
      let msg = "Failed to sign in. Please check your credentials.";
      if (err?.code === "auth/invalid-email") msg = "Invalid email address.";
      else if (err?.code === "auth/user-not-found") msg = "No account found for that email.";
      else if (err?.code === "auth/wrong-password") msg = "Wrong password.";
      else if (err?.code === "auth/too-many-requests") msg = "Too many attempts. Try again later.";


      Alert.alert(`Sign in error (${err?.code || "unknown"})`, `${msg}\n\n${err?.message || ""}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#1E1E1E" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <SafeAreaView style={{ paddingHorizontal: "10%", paddingTop: 20 }}>
          <Image
            style={{ height: 302, width: 348.74, alignSelf: "center", marginTop: 15 }}
            source={require("../../assets/images/Group 2 (1).png")}
          />

          <Text style={{ fontFamily: "medium", fontSize: 42, color: "#fff", textAlign: "center", marginTop: 18 }}>
            Let's You In
          </Text>

          <View style={{ marginTop: 24 }}>
            <InputComponent
              placeholder="Email"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <InputComponent
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 26 }}>
            <Text style={{ color: "#fff" }}>Create a new account </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text style={{ color: "green", marginLeft: 8 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: 12 }}>
            <TouchableOpacity onPress={() => router.push("/(auth)/forgot-password")}>
              <Text style={{ color: "#9AA0A6" }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>


          <View style={{ marginTop: 60 }}>
            <ButtonComponent title={loading ? "Signing in..." : "Sign in"} onPress={handleSignIn} disabled={loading} />
            {loading && <ActivityIndicator size="small" style={{ marginTop: 10 }} />}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}