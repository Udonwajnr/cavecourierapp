import { View, Text,TextInput,TouchableOpacity, Image,StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox';
import React from 'react'

const LoginScreen = () => {
  return (
    <View className="px-3 py-5 bg-[#FBFBFB] h-full">
      <Text className="text-2xl font-semibold mt-5">Login</Text>
      <Text className="text-[#8C8994]">Please use Contact Information here</Text>
      
      <View className="mt-3">
        <View className="mt-3">
            <Text className="font-semibold">Enter Email</Text>
            <TextInput className="h-10 mt-4 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='e.g johndoe@gmail.com'/>  
        </View>
        
        <View className="mt-3">
            <Text className="font-semibold">Enter Password</Text>
            <TextInput className="h-10 mt-4 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='Min 6 characters'/>  
        </View>
      </View>
      
      <View className="flex-row justify-between items-center my-2">
        <View className="flex-row items-center mt-3">
            <Checkbox style={styles.checkbox}/>
            <Text className="text-[#8C8994] ml-2">Remember Me</Text>
        </View>
        <TouchableOpacity>
            <Text className="text-[#2EC76D]">Forget Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-[#2EC76D] mt-5 py-2 rounded"><Text className="text-white text-center font-bold">Login</Text></TouchableOpacity>
        <View className="flex-row justify-center items-center overflow-hidden my-3">
            <View className="border border-[#E9E9EA] w-full mr-3"></View>
                <Text className="">or</Text>
            <View className="border border-[#E9E9EA] w-full ml-3"></View>
        </View>
 
{/* icons */}

    <View className="flex-row justify-center gap-x-3">
        <Image className="w-6 h-6" source={require('../../assets/google-96.png')}/>
        <Image className="w-6 h-6" source={require('../../assets/facebook-96.png')}/>
    </View>

        <View className="flex-row items-center justify-center mt-3">
                <Text className="items-center justify-center">Already have an account ?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text className="text-[#2EC76D] ml-1">Sign Up</Text></TouchableOpacity>
              </View>
        </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    checkbox:{
        borderRadius:6,
        borderColor:"#8C8994"
    }
}) 