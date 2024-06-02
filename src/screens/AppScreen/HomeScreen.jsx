import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SearchInput from '../../components/SearchInput';
import PromotionCard from '../../components/PromotionCard';
import CarouselPromotion from '../../components/CarouselPromotion';
import RestaurantFilter from '../../components/RestaurantFilter';
import RestaurantNearYou from '../../components/RestaurantNearYou';
const HomeScreen = () => {
  return (
    <View className="px-3 py-5 h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* location and notification */}

        <View className="flex-row justify-between items-center">
          <View></View>
          <View >
            <View className="flex-row items-center justify-center">
              <Text className="text-[#2EC76D] text-center font-bold">LOCATION</Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
            <Text className="text-center font-bold">12 Portharcourt,Nigeria</Text>
          </View>

          <View className="relative">
            <View className="absolute h-4 w-4 right-0 rounded-full bg-red-500 z-10 justify-center items-center"><Text className="text-[7px]">2</Text></View>
            <FontAwesome5 name="bell" size={30} color="black" />
          </View>
        </View>

        {/* name */}
        <View className="mt-4">
          <Text className="text-sm font-bold text-[#8C8994]">Hello Ada</Text>
          <Text className="text-lg font-bold">What are you Having today?</Text>
        </View>
        <SearchInput/>

        {/* discount */}
        
        <View className="mt-5">
          <CarouselPromotion/>
        </View>

        <RestaurantFilter/>
     
      <View className="mt-6">
        <RestaurantNearYou/>
      </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen