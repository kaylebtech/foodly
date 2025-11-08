import { Stack } from "expo-router";
import { useFonts } from "expo-font"

import { useEffect, useState } from "react";


export default function RootLayout() {

  const [showSplash, setShowSplash] = useState(true);

  const [loaded, error] = useFonts({
    'bold' : require('../assets/font/Poppins/Poppins-Bold.ttf'),
    'medium' : require('../assets/font/Poppins/Poppins-Medium.ttf'),
    'regular' : require('../assets/font/Poppins/Poppins-Regular.ttf'),
    'semiBold' : require('../assets/font/Poppins/Poppins-SemiBold.ttf'),
    'Regularr' : require('../assets/font/Itim/Itim-Regular.ttf'),
    "regularrr" : require('../assets/font/Inter/static/Inter_18pt-Regular.ttf')
  });

  
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="walkthrough" />
      <Stack.Screen name="(auth)" />
    </Stack>
  )
}