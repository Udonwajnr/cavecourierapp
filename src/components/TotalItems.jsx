import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TotalItems = () => {
  return (
    <View>
        <View className="flex-row justify-between mt-1">
            <Text className="text-[#8c8994] text-base">SubTotal</Text>
            <Text className="text-[#8c8994] text-base">N5,500</Text>
        </View>

        <View className="flex-row justify-between mt-1">
            <Text className="text-[#8c8994] text-base">Discount</Text>
            <Text className="text-[#8c8994] text-base">N5,500</Text>
        </View>

        <View className="flex-row justify-between mt-1">
            <Text className="text-[#8c8994] text-base">Delivery</Text>
            <Text className="text-[#8c8994] text-base">N5,500</Text>
        </View>
        
        <View className="border-b my-3 border-[#e9e9ea]"></View>

        <View className="flex-row justify-between ">
            <Text className="text-lg font-medium">Total</Text>
            <Text className="text-lg font-medium">N5,500</Text>
        </View>

        <TouchableOpacity className="py-2 bg-[#2EC76D] flex-row justify-center items-center rounded-md my-3">
            <Text className="text-white font-semibold text-lg">Continue</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TotalItems