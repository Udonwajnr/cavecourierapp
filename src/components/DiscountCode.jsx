import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const DiscountCode = () => {
  return (
    <View className="flex-row mt-5 mb-6 bg-[#E9E9EA] h-10 items-center">    
      <MaterialIcons name="discount" size={24} color="#8c8994" />
      <TextInput placeholder='Add Promo Code' placeholderTextColor={"#8c8994"} className="flex-1 h-full"/>
    </View>
  )
}

// e9e9ea
export default DiscountCode