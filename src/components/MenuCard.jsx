import { View, Text,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuCard = () => {
  return (
    <View className=" w-[220px] rounded-lg mt-3 mr-3">
        <View className="h-40">
            <Image source={require("../assets/jellof2.jpg")} className="w-full h-full rounded-lg"/>
        </View>
        <View>
            <Text className="text-xl font-bold">Ewedu Soup</Text>
        </View>
        <View className="flex-row mt-1 justify-between">
            <View className="flex-row gap-2 items-center">
              <MaterialCommunityIcons name="truck-delivery" size={20} color="#2EC76D" />
              <Text className='text-xs font-bold'>Free Delivery</Text>
            </View>

            <View className=" ml-4 flex-row  items-center">
              <MaterialCommunityIcons name="timer-outline" size={20} color="#2EC76D" />
              <Text className='text-xs font-bold'>15-20mins</Text>
            </View>
          </View>
        <View>
            <Text className="font-bold text-xl">N2,000</Text>
        </View>
    </View>
  )
}

export default MenuCard