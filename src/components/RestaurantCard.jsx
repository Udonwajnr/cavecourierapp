import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const RestaurantCard = () => {
  return (
    <View className="w-[260px] mr-5  bg-[#FBFBFB] relative mb-6 rounded-lg pb-2">
        <View className="flex-row justify-between absolute z-20 w-full items-center top-3 px-3">
          <View className="flex-row justify-between items-center bg-white rounded-3xl px-2 py-1">
            <Text className="font-bold text-base">4.5 </Text>
              <Entypo name="star" size={15} color="rgb(232,176,44)" />
            <Text className="text-xs text-[#8C8994]">(100+)</Text>
          </View>

          <TouchableOpacity className="p-3 bg-white rounded-full">
            <Feather name="bookmark" size={15} color="#8C8994"/>
          </TouchableOpacity>
        </View>
        
      <View className="h-44">
        <Image source={require("../assets/jellof1.jpg")} className="w-full h-full rounded-2xl"/>
      </View>
      <View className="px-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold">Tasty Bites</Text>
          <Text className="text-lg font-bold text-[#2EC76D]">N3500</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="font-bold text-[#bab9be]"> Beans</Text>
          <Text className="font-bold">
            <Entypo name="dot-single" size={24} color="#8C8994" />
          </Text>
          <Text className="font-bold text-[#bab9be]">Plantain</Text>
          <Text className="font-bold">
            <Entypo name="dot-single" size={24} color="#8C8994" />
          </Text>
          <Text className="font-bold text-[#bab9be]"> Stew</Text>
        </View>
        
        <View className="flex-row mt-2">
          <View className="flex-row gap-2 items-center">
            <MaterialCommunityIcons name="truck-delivery" size={17} color="#2EC76D" />
            <Text className='text-xs font-bold'>Free Delivery</Text>
          </View>

          <View className=" ml-4 flex-row  items-center">
            <MaterialCommunityIcons name="timer-outline" size={17} color="#2EC76D" />
            <Text className='text-xs font-bold'>15-20mins</Text>
          </View>

      </View>

      </View>
    </View>
  )
}

export default RestaurantCard