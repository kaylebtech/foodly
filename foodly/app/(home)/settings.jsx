import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NOTIFS = [
  { id: "n1", title: "Payment Received", body: "We received your payment for booking #1234.", time: "3h" },
  { id: "n2", title: "Trip Reminder", body: "Your trip to Abuja departs 10:00 AM tomorrow.", time: "1d" },
  { id: "n3", title: "Update", body: "App updated to v1.0.1 with fixes.", time: "3d" },
];

export default function System() {
  const renderItem = ({ item }) => (
    <View style={{ paddingVertical: 14, borderBottomColor: "#111215", borderBottomWidth: 1 }}>
      <Text style={{ color: "#fff", fontWeight: "700" }}>{item.title}</Text>
      <Text style={{ color: "#9AA0A6", marginTop: 6 }}>{item.body}</Text>
      <Text style={{ color: "#6B7280", marginTop: 8, fontSize: 12 }}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F1113" }}>
      <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>System</Text>
        <TouchableOpacity style={{ padding: 8 }}>
          <Ionicons name="settings-outline" size={22} color="#9AA0A6" />
        </TouchableOpacity>
      </View>

      <FlatList data={NOTIFS} keyExtractor={i => i.id} renderItem={renderItem} contentContainerStyle={{ padding: 20 }} />

      <TouchableOpacity style={{ margin: 20, backgroundColor: "#0B1220", padding: 12, borderRadius: 10, alignItems: "center" }}>
        <Text style={{ color: "#34D399", fontWeight: "700" }}>Clear all notifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}