import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'

const RestaurantFilter = () => {
  return (
    <View>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className=" p-3 rounded-full bg-[#2EC76D] ">
                <Text className="text-white">All</Text>    
            </TouchableOpacity>

            <TouchableOpacity className=" p-2 rounded-full bg-[#E9E9EA] flex-row items-center gap-x-1 mx-2">
                <Image source={require('../assets/soup.png')} className="w-6 h-6"/>
                <Text className="text-black">Stew</Text>    
            </TouchableOpacity>

            <TouchableOpacity className=" p-2 rounded-full bg-[#E9E9EA] flex-row items-center gap-x-1 mx-2">
                <Image source={require('../assets/rice.png')} className="w-6 h-6"/>
                <Text className="text-black">Rice</Text>    
            </TouchableOpacity>

            <TouchableOpacity className=" p-2 rounded-full bg-[#E9E9EA] flex-row items-center gap-x-1 mx-2">
                <Image source={require('../assets/soup.png')} className="w-6 h-6"/>
                <Text className="text-black">Soup</Text>    
            </TouchableOpacity>

            <TouchableOpacity className=" p-2 rounded-full bg-[#E9E9EA] flex-row items-center gap-x-1 mx-2">
                <Image source={require('../assets/coke.png')} className="w-6 h-6"/>
                <Text className="text-black">Drinks</Text>    
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default RestaurantFilter