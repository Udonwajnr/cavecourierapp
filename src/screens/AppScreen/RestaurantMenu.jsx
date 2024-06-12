import { View, Text,ImageBackground,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MenuCard from '../../components/MenuCard';

const RestaurantMenu = () => {
  return (
    <>
    <ScrollView>
        <View className="relative">
          <View className="">
            <View className="h-[350px]">
                <Image source={require("../../assets/jellof2.jpg")} className="w-full h-full"/>
            </View>
            <View className="flex justify-between flex-row absolute top-6 w-full px-5">
                <TouchableOpacity className="p-3 bg-white rounded-full">
                <Entypo name="chevron-thin-left" size={24} color="#8C8994" />
              </TouchableOpacity>

              <TouchableOpacity className="p-3 bg-white rounded-full">
                <Feather name="bookmark" size={24} color="#8C8994"/>
              </TouchableOpacity>
            </View>
          </View>

            <View className="bg-black rounded-full absolute -bottom-5 z-30">
              <Image source={require('../../assets/foodlogo.png')} className="w-28 h-28 rounded-full"/>
            </View>
        </View>
        
          {/* header title */}
        <View className=" mt-8 px-3">
          <View className="flex-row items-center gap-x-3">
            <View>
              <Text className="text-2xl font-bold">Tasty Bites</Text>  
            </View>
            <View className="flex-row items-center ">
              <Text className="font-bold text-xs">4.5 </Text>
                <Entypo name="star" size={15} color="rgb(232,176,44)" />
              <Text className="text-xs text-[#8C8994]">(100+)</Text>
            </View>
          </View>  

          <View className="flex-row items-center">
            <Text className="text-[#8C8994] text-base font-bold">Eliozu,Portharcourt</Text>
            <Entypo name="dot-single" size={30} color="#2EC76D"/>
            
            <View className="flex-row items-center">
              <Text className="text-[#8C8994] text-base ">Open </Text>
              <Entypo name="chevron-thin-down" size={14} color="#8C8994" />
            </View>
          </View>

          <View className="flex-row mt-2">
            <View className="flex-row gap-2 items-center">
              <MaterialCommunityIcons name="truck-delivery" size={20} color="#2EC76D" />
              <Text className='text-xs font-bold'>Free Delivery</Text>
            </View>

            <View className=" ml-4 flex-row  items-center">
              <MaterialCommunityIcons name="timer-outline" size={20} color="#2EC76D" />
              <Text className='text-xs font-bold'>15-20mins</Text>
            </View>
          </View>

          <View className="flex-row mt-2 justify-between">
            <TouchableOpacity className="bg-[#2EC76D] mr-0.5 py-2 w-6/12 rounded-xl">
              <Text className="text-white font-bold text-center text-base">Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-[#E9E9EA] py-2 w-6/12 rounded-xl">
              <Text className="text-white font-bold text-center text-base">Pick Up</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* featured items  */}
          {/* categories design a category for this */}
        <View className="px-3 mt-5 pb-4">
          <Text className="text-xl font-bold">Featured Items</Text>
          <ScrollView horizontal>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>            
          </ScrollView>

        </View>
    </ScrollView>
      </>
  )
}

export default RestaurantMenu