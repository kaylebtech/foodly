import { Stack } from "expo-router";




const AuthLayout = () => {


 

  return (
    <Stack screenOptions={{headerShown:false}} >

      <Stack.Screen name="homes" />

      <Stack.Screen name="mesage" />
      
      <Stack.Screen name="profile" />

      <Stack.Screen name="settings" />
      
    </Stack>
  )
}



export default AuthLayout;