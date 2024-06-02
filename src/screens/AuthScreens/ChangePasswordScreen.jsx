import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const ChangePasswordScreen = () => {
  return (
    <View className="px-3 pt-3">
        <View>
            <Text className="text-lg">Create New Password</Text>
            <Text className="text-[#8C8994]">Your new Password must be unique</Text>
        </View>
        
        <View>
          <View className="mt-3">
            <Text>New Password</Text>
            <TextInput placeholder='Enter Password' className="h-10 mt-2 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded"/>
          </View>

          <View className="mt-3">
            <Text>Confirm Password</Text>
            <TextInput placeholder='Confirm Password' className="h-10 mt-2 bg-[#E9E9EA] focus:border-2 focus:bg-[#FBFBFB] focus:border-[#2EC76D] px-3 rounded"/>
          </View>
        </View>
        <TouchableOpacity className="bg-[#2EC76D] mt-5 py-2 rounded"><Text className="text-white text-center font-bold">Change</Text></TouchableOpacity>
    </View>
  )
}

export default ChangePasswordScreen