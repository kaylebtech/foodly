import { Stack } from "expo-router";




const WelcomeLayout = () => {


 

  return (
    <Stack screenOptions={{headerShown:false}} >
      <Stack.Screen name="welcome"/>

      <Stack.Screen name="walkthrough2"/>

      <Stack.Screen name="(auth)" />
    </Stack>
  )
}



export default WelcomeLayout;