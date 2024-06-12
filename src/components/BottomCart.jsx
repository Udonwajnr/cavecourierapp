import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

const BottomCart = () => {
  return (
    <View className="flex-row justify-between px-3 items-center bg-[#FBFBFB] py-2" style={style.cartShadow}>
        <View>
         <Text className="text-[#8C8994] text-base font-medium">Total Price</Text>
          <Text className="text-[#2EC76D] text-xl font-semibold">N5,550</Text>
        </View>
        <View>
          <TouchableOpacity className="bg-[#2EC76D] flex-row items-center py-2 px-5 gap-x-2 rounded-md">
            <FontAwesome6 name="bag-shopping" size={20} color="white" />
            <Text className="text-white font-bold">Add to Cart</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default BottomCart

const style = StyleSheet.create({
  cartShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
})