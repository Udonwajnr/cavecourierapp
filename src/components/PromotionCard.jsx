import { View, Text, ImageBackground, StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const PromotionCard = () => {
  return (
    <View className="mr-3">
      <ImageBackground imageStyle={{ borderRadius: 10}}  resizeMode='cover' source={require("../assets/backgroundimg.jpg")} className="h-40 rounded-3xl px-4 justify-center" >
        <Text className="text-[#E9E9EA] text-xl">Get Special discount</Text>
        <Text className="text-[#FBFBFB] text-3xl font-bold">Up to 75%</Text>
        <TouchableOpacity className="bg-[#FBFBFB] w-32 justify-center items-center py-2 mt-3 rounded-lg">
          <Text className="font-bold">Order Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default PromotionCard