
import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const CATEGORIES = [
  { id: "1", label: "Burger", image: require("../../assets/images/hamburger (1).png") },
  { id: "2", label: "Pizza", image: require("../../assets/images/pizza.png") },
  { id: "3", label: "Noodles", image: require("../../assets/images/instant-noodles.png") },
  { id: "4", label: "Chicken", image: require("../../assets/images/chicken.png") },
  { id: "5", label: "Veg", image: require("../../assets/images/vegetarian.png") },
  { id: "6", label: "Cake", image: require("../../assets/images/strawberry-cake.png") },
  { id: "7", label: "Beer", image: require("../../assets/images/beer.png") },
  { id: "8", label: "Others", image: require("../../assets/images/melonpan.png") },
];

const WEEKLY = [
  {
    id: "w1",
    title: "Green Salad",
    subtitle: "Healthy choice",
    image: require("../../assets/images/image 7 (1).png"),
    price: "₦3,200",
  },
  {
    id: "w2",
    title: "Spicy Chicken",
    subtitle: "Chef's special",
    image: require("../../assets/images/image 3.png"),
    price: "₦4,500",
  },
];

export default function HomeScreen() {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={{
        width: (width - 64) / 4,
        alignItems: "center",
        marginBottom: 18,
      }}
    >
      <View
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          backgroundColor: "#071422",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
          shadowColor: "#000",
          shadowOpacity: 0.18,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Image source={item.image}  style={{width: 40, height: 40}}/>
      </View>
      <Text style={{ color: "#C6CCD1", fontSize: 12 }}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderWeekly = ({ item }) => (
    <View
      style={{
        width: width * 0.6,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        marginRight: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 6,
      }}
    >
      <Image
        source={item.image}
        style={{ width: "100%", height: 140, resizeMode: "cover" }}
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#0B1220" }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>
          {item.subtitle}
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            color: "#10B981",
            fontWeight: "700",
          }}
        >
          {item.price}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#191a1f" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/w.jpg")}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "#9AA0A6", fontSize: 12 }}>Welcome</Text>
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
                Kayleb Tech 
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                padding: 8,
                borderRadius: 10,
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                padding: 8,
                borderRadius: 10,
              }}
            >
              <Ionicons name="search-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search bar */}
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            backgroundColor: "#0B1220",
            borderRadius: 12,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={18} color="#A0A0A0" />
          <TextInput
            placeholder="Search your interesting foods..."
            placeholderTextColor="#9AA0A6"
            style={{ color: "#fff", marginLeft: 8, flex: 1 }}
          />
        </View>

        {/* Special offers */}
        <View style={{ marginTop: 18, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Special offers
            </Text>
            <Text style={{ color: "#34D399", fontSize: 13 }}>See more...</Text>
          </View>

          <TouchableOpacity activeOpacity={0.9} style={{ marginTop: 12 }}>
            <LinearGradient
              colors={["#4CF986", "#EAEAEA"]}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                height: 120,
                borderRadius: 22,
                flexDirection: "row",
                padding: 18,
                alignItems: "center",
                shadowColor: "#000",
                shadowOpacity: 0.18,
                shadowRadius: 20,
                elevation: 8,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#ffffff", fontSize: 48, fontWeight: "800" }}>
                  30%
                </Text>
                <Text
                  style={{
                    color: "#E7F9F0",
                    fontSize: 14,
                    marginTop: 6,
                    opacity: 0.95,
                  }}
                >
                  off from{"\n"}chicken burger
                </Text>
              </View>
              <Image
                source={require("../../assets/images/image 2.png")}
                style={{
                  width: 100,
                  height: 90,
                  resizeMode: "contain",
                  marginLeft: 12,
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
          <FlatList
            data={CATEGORIES}
            renderItem={renderCategory}
            keyExtractor={(i) => i.id}
            numColumns={4}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 8 }}
          />
        </View>

        {/* Weekly special */}
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Weekly Special
            </Text>
            <Text style={{ color: "#34D399", fontSize: 13 }}>See all</Text>
          </View>

          <FlatList
            data={WEEKLY}
            renderItem={renderWeekly}
            horizontal
            keyExtractor={(i) => i.id}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 16 }}
            contentContainerStyle={{ paddingRight: 20 }}
          />
        </View>
      </ScrollView>

      {/* Floating Tabs */}
      <View
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 18,
          height: 64,
          backgroundColor: "#081018",
          borderRadius: 36,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 12,
          elevation: 10,
          paddingHorizontal: 12,
        }}
      >
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="home" size={22} color="#14B8A6" />
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="mail" size={20} color="#A0A0A0" onPress={() => router.push("message")} />
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="person" size={20} color="#A0A0A0" onPress={() => router.push("profile")} />
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center"  }}>
          <Ionicons name="settings" size={20} color="#A0A0A0"  onPress={() => router.push("systems")}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}