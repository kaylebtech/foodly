
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AuthButtonComponent from "../components/authButton";
import ButtonComponent from "../components/button";
import { Text, Image, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from "react-native";
import DividerWithor from "../components/divider";
import InputComponent from "../components/input";
import BackgroundColorImage from "../components/backgroundImage";
import Ionicons from '@expo/vector-icons/Ionicons';
import PhoneInput from "../components/phoneInput";
import { useState } from "react";
import Zocial from "@expo/vector-icons/Zocial";


import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function AuthLayout () {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const onSignUp = async () => {
    setErr("");
    if (!email.trim() || !password || !confirm || !fullName.trim() || !phone.trim()) {
      setErr("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      setErr("Password should be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setErr("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);

      if (cred && cred.user) {
        await updateProfile(cred.user, { displayName: fullName.trim() }).catch(() => {});

        await sendEmailVerification(cred.user);
      }

      Alert.alert(
        "Account created",
        "A verification email has been sent to your email. Please verify before signing in.",
        [{ text: "OK", onPress: () => router.replace("/(auth)/sign-in") }]
      );
    } catch (e) {
      console.log("signup error =>", e);

      if (e.code === "auth/email-already-in-use") setErr("This email is already in use.");
      else if (e.code === "auth/invalid-email") setErr("Please enter a valid email.");
      else if (e.code === "auth/weak-password") setErr("Choose a stronger password.");
      else setErr("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#1E1E1E" }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <SafeAreaView style={{ paddingHorizontal: '10%', paddingTop: 20 }} >

          <Image
            style={{ height: 234.05, width: 252, alignSelf: "center" }}
            source={require("../../assets/images/Group 1.png")}
          />

          <View>
            <Text style={{
              fontFamily: "medium",
              fontSize: 30,
              color: "#ffffff",
              textAlign: "center",
              marginTop: 30
            }}>Create a New Account</Text>
          </View>

          <View style={{ marginTop: 24, gap: 12 }}>
            <PhoneInput value={phone} onChangeText={setPhone} />

            <InputComponent
              placeholder="Email"
              keyboardType="email-address"
              leftIcon={{ family: Zocial, name: "email" }}
              value={email}
              onChangeText={setEmail}
            />

            <InputComponent
              placeholder="Full Name"
              icon="user"
              value={fullName}
              onChangeText={setFullName}
            />

            <InputComponent
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <InputComponent
              placeholder="Confirm Password"
              secureTextEntry
              value={confirm}
              onChangeText={setConfirm}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 12 }}>
            <Ionicons name="ellipse-outline" size={15} color="#02C543" />
            <Text style={{ color: "#ffffff", fontFamily: "semIBold", fontSize: 12, marginLeft: 8 }}>Remember me</Text>
          </View>

          {err ? (
            <Text style={{ color: "#FF6B6B", textAlign: "center", marginTop: 12 }}>{err}</Text>
          ) : null}

          <View style={{ marginTop: 24 }}>

            <TouchableOpacity
              onPress={onSignUp}
              activeOpacity={0.8}
              style={{
                backgroundColor: loading ? "#0B6F4D" : "#10B981",
                padding: 14,
                borderRadius: 12,
                alignItems: "center"
              }}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 18 }}>
            <DividerWithor />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
            <BackgroundColorImage icon={require("../../assets/images/facebook (2).png")} />
            <BackgroundColorImage icon={require("../../assets/images/google (1).png")} />
            <BackgroundColorImage icon={require("../../assets/images/apple-logo (1).png")} />
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 22 }}>
            <Text style={{ color: "#ffffff" }}>Already have an account? </Text>
            <Text style={{ color: "green" }} onPress={() => router.push("/(auth)/sign-in")}>Sign in</Text>
          </View>

        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}