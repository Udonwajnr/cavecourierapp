import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (

    <View className="px-3 pt-3">
        <View><Text className="text-xl">Forgot Password?</Text></View>
        <View className="mt-3">
            <Text className="font-semibold">Enter Email</Text>
            <TextInput className="h-10 mt-2 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded" placeholder='e.g johndoe@gmail.com'/>  
        </View>
        <TouchableOpacity className="bg-[#2EC76D] mt-5 py-2 rounded"><Text className="text-white text-center font-bold">Send Code</Text></TouchableOpacity>
    </View>
  )
}

export default ForgotPassword