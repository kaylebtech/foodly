import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F1113" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 18 }}>
          <Image
            source={require("../../assets/images/w.jpg")}
            style={{ width: 72, height: 72, borderRadius: 36 }}
          />
          <View style={{ marginLeft: 14 }}>
            <Text style={{ color: "#E6EEF0", fontSize: 18, fontWeight: "700" }}>Kayleb Tech</Text>
            <Text style={{ color: "#98A1A6", marginTop: 2 }}>kayleb@example.com</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#0B1220", borderRadius: 12, padding: 14, marginBottom: 18 }}>
          <Text style={{ color: "#A9C5BF", fontSize: 13 }}>Account</Text>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="card" size={20} color="#34D399" />
              <Text style={{ color: "#fff", marginLeft: 12 }}>Payment Methods</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location" size={20} color="#60A5FA" />
              <Text style={{ color: "#fff", marginLeft: 12 }}>Saved Addresses</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#0B1220", borderRadius: 12, padding: 14 }}>
          <Text style={{ color: "#A9C5BF", fontSize: 13 }}>Preferences</Text>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, justifyContent: "space-between" }}>
            <Text style={{ color: "#fff" }}>Dark Mode</Text>
            <Text style={{ color: "#6B7280" }}>On</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, justifyContent: "space-between" }}>
            <Text style={{ color: "#fff" }}>Language</Text>
            <Text style={{ color: "#6B7280" }}>English</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ marginTop: 20, backgroundColor: "#EF4444", padding: 12, borderRadius: 10, alignItems: "center" }}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}