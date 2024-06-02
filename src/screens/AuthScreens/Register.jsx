import { View, Text,TextInput,TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RegisterScreen = () => {
  return (
    <View className="px-3 py-5">
      <Text className="text-2xl font-semibold mt-5">Create Account</Text>
      <Text className="text-[#8C8994]">Please use Contact Information here</Text>
      
      <View className="mt-4">
        <View >
            <Text className="font-semibold">Enter Your Name</Text>
            <TextInput className="h-10 mt-4 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='Adaugo Chubuike'/>  
        </View>

        <View className="mt-4">
            <Text className="font-semibold">Enter Email</Text>
            <TextInput className="h-10 mt-4 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='e.g johndoe@gmail.com'/>  
        </View>
        
        <View className="mt-4">
            <Text className="font-semibold">Enter PhoneNumber</Text>
            <TextInput className="h-10 mt-4 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='e.g 08070629237'/>  
        </View>
        
        <View className="mt-4">
            <Text className="font-semibold">Enter Password</Text>
            <TextInput className="h-10 mt-4 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='Min 6 characters'/>  
        </View>
      </View>

      <TouchableOpacity className="bg-[#2EC76D] mt-5 py-2 rounded"><Text className="text-white text-center font-bold">Register</Text></TouchableOpacity>
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
                <TouchableOpacity
                //  onPress={()=>navigation.navigate("Login")}
                 ><Text className="text-[#2EC76D] ml-1">Login</Text></TouchableOpacity>
              </View>
        </View>
  )
}

export default RegisterScreen