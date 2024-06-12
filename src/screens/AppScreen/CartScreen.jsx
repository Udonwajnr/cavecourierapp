import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  return (
    <View className="px-3 flex-1">
        <ScrollView>
            <View className="flex-row justify-between py-5">
                <Entypo name="chevron-thin-left" size={20} color="black" />
                <Text className="text-lg font-bold">My Cart</Text>
                <View></View>
            </View>
            {/* Restaurant details */}
            <View className="flex-row items-center gap-x-2 border-b border-[#E9E9Ea] pb-5">
                <View className="bg-black rounded-full">
                <Image source={require('../../assets/foodlogo.png')} className="w-20 h-20 rounded-lg"/>
                </View>
                <View>
                    <Text className="text-lg font-bold">Tasty Bites</Text>
                    <View className="flex-row  items-center">
                        <Text className="text-[#8C8994]">Soups</Text>
                        <Entypo name="dot-single" size={24} color="#8C8994" />
                        <Text className="text-[#8C8994]">Stews</Text>
                        <Entypo name="dot-single" size={24} color="#8C8994" />
                        <Text className="text-[#8C8994]">Rice</Text>
                        <Entypo name="dot-single" size={24} color="#8C8994" />
                    </View>
                </View>
            </View>

            {/* items in cart */}
            <View className="flex-row justify-between my-5">
                <Text className="text-[#071731]">3 ITEMS IN CART</Text>
                <TouchableOpacity>
                    <Text className="text-red-700">Remove All</Text>
                </TouchableOpacity>
            </View>

            {/* cart items */}
            <View className="flex-col gap-y-6">
                <View className="flex-row justify-between border-b border-[#E9E9Ea] py-3">
                   <View className="flex-row gap-x-4">
                        <View>
                            <Image source={require('../../assets/Native-Soup.jpg')} className="w-20 h-20 rounded-lg"/>
                        </View>
                        
                        <View className="">
                            <Text className="text-base font-bold">SeaFood Okoro</Text>
                            <View className="flex-row  items-center my-0.5">
                                    <Text className="text-[#8C8994] text-xs">Soups</Text>
                                    <Entypo name="dot-single" size={24} color="#8C8994" />
                                    <Text className="text-[#8C8994] text-xs">Stews</Text>
                                    <Entypo name="dot-single" size={24} color="#8C8994" />
                                    <Text className="text-[#8C8994] text-xs">Rice</Text>
                            </View>
                        <Text className="text-base font-semibold">N4,500</Text>
                        </View>
                   </View>

                    <View className="flex-col justify-between items-end">
                        <TouchableOpacity className='flex-row items-center'>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <View className="flex-row items-center gap-2 ">
                            <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                            <AntDesign name="minus" size={15} color="#2EC76D" />
                            </TouchableOpacity>
                            <Text className="text-sm">2</Text>
                            <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                            <AntDesign name="plus" size={15} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View className="flex-row justify-between border-b border-[#E9E9Ea] py-3">
                    <View className="flex-row gap-x-4">
                        <View >
                        <Image source={require('../../assets/coca.png')} className="w-20 h-20 rounded-lg"/>
                        </View>
                        
                        <View>
                            <Text className="text-base font-bold">Coke</Text>
                            <View className="flex-row  items-center my-0.5">
                                    <Text className="text-[#8C8994] text-xs">Soft Drinks</Text>
                            </View>
                        <Text className="text-base font-semibold">N250</Text>
                        </View>
                    </View>

                    <View className="flex-col justify-between items-end">
                        <TouchableOpacity className='flex-row items-center'>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <View className="flex-row items-center gap-2 ">
                            <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                            <AntDesign name="minus" size={15} color="#2EC76D" />
                            </TouchableOpacity>
                            <Text className="text-sm">2</Text>
                            <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                            <AntDesign name="plus" size={15} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View className="flex-row justify-between border-b border-[#E9E9Ea] py-3">
                    <View className="flex-row gap-x-4">
                        <View >
                        <Image source={require('../../assets/schweppes.png')} className="w-20 h-20 rounded-lg"/>
                        </View>
                        
                        <View>
                            <Text className="text-base font-bold">Schweppes</Text>
                            <View className="flex-row  items-center my-0.5">
                                    <Text className="text-[#8C8994] text-xs">Soft Drinks</Text>
                            </View>
                        <Text className="text-base font-semibold">N350</Text>
                        </View>
                    </View>

                    <View className="flex-col justify-between items-end">
                        <TouchableOpacity className='flex-row items-center'>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <View className="flex-row items-center gap-2 ">
                            <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                            <AntDesign name="minus" size={15} color="#2EC76D" />
                            </TouchableOpacity>
                            <Text className="text-sm">2</Text>
                            <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                            <AntDesign name="plus" size={15} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>

    </View>
  )
}

export default CartScreen