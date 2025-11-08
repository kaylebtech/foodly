import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MESSAGES = [
  { id: "m1", title: "Support", snippet: "Your booking was successful.", time: "2h ago" },
  { id: "m2", title: "Promo", snippet: "30% off on chicken burger.", time: "1d ago" },
  { id: "m3", title: "Driver", snippet: "Driver is nearby.", time: "2d ago" },
];

export default function Messages() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ paddingVertical: 14, borderBottomColor: "#111215", borderBottomWidth: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ color: "#fff", fontWeight: "700" }}>{item.title}</Text>
          <Text style={{ color: "#9AA0A6", marginTop: 6 }}>{item.snippet}</Text>
        </View>
        <Text style={{ color: "#6B7280", fontSize: 12 }}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F1113" }}>
      <View style={{ padding: 20, borderBottomColor: "#0B1220", borderBottomWidth: 1 }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Messages</Text>
        <Text style={{ color: "#6B7280", marginTop: 6 }}>Inbox</Text>
      </View>

      <FlatList
        data={MESSAGES}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />

      <TouchableOpacity style={{ position: "absolute", right: 20, bottom: 90, backgroundColor: "#10B981", width: 56, height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center", elevation: 6 }}>
        <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}