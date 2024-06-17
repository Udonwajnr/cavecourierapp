import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Checkout = () => {
  return (
    <View className="px-3 flex-1">
        <View className="flex-row justify-between py-5">
            <Entypo name="chevron-thin-left" size={20} color="black" />
            <Text className="text-lg font-bold">My Cart</Text>
            <View className="relative">
            <View className="absolute h-4 w-4 right-0 rounded-full bg-red-500 z-10 justify-center items-center"><Text className="text-[7px]">2</Text></View>
            <FontAwesome5 name="bell" size={30} color="black" />
          </View>
        </View>
        {/* delivery Address */}
        <View>
            <View className="flex-row justify-between">
                <Text className="text-lg font-bold">Delivery Address</Text>
                <TouchableOpacity>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row">
                <FontAwesome name="map-marker" size={24} color="black" />
                <View className="flex-1">
                    <Text>Home</Text>
                    <Text>120 Nkpolu Road, East west Road PortHarcourt, River State.</Text>
                </View>
            </View>
        </View>

    </View>
  )
}

export default Checkout