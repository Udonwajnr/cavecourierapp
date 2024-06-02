import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'
const RestaurantNearYou = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="font-bold text-xl">Restaurant Near You</Text>
        </View>
        <View className="flex-1">
          <TouchableOpacity >
            <Text className="text-[#2EC76D] text-right">View All</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View>
          <ScrollView className="mt-3" horizontal={true} >
            <RestaurantCard/>
            <RestaurantCard/>
          </ScrollView>
        </View>
    </View>
  )
}

export default RestaurantNearYou