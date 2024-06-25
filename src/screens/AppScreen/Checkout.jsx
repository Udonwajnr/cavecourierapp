import { View, Text,TouchableOpacity,Image, ScrollView} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CheckBox from '../../components/CheckBox';
import RoundedCheckBox from '../../components/RoundCheckbox';
import { AntDesign } from '@expo/vector-icons';
import TotalItems from '../../components/TotalItems';

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

    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        {/* delivery Address */}
        <View>
            <View className="flex-row justify-between">
                <Text className="text-lg font-bold">Delivery Address</Text>
                <TouchableOpacity>
                    <Text className="text-[#2EC76D]">Edit</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row mt-3 bg-[#E9E9EA]">
                <Image source={require('../../assets/HILmr.png')} className="w-16 h-full "/>
                <View className="flex-1 py-2 ml-2">
                    <Text className="font-bold">Home</Text>
                    <Text className="text-xs mt-0.5">120 Nkpolu Road, East west Road PortHarcourt, River State.</Text>
                </View>
            </View>
        </View>

        {/* payment method */}

        <View className="mt-3 ">
            <View className="flex-row justify-between">
                <Text className="text-lg font-bold">Payment Method</Text>
                <TouchableOpacity>
                    <Text className="text-[#2EC76D]">Edit</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row mt-3 bg-white items-center">
                <View className="w-2/12  bg-[#E9E9EA]">
                    <Image source={require('../../assets/mastercard.png')} className="w-16 h-16"/>
                </View>
                <View className="flex-1 py-2 ml-2 bg-white h-full">
                    <Text className="font-bold text-lg">MasterCard</Text>
                    <Text>****2134</Text>
                </View>
    
                <View className="bg-white">
                    <RoundedCheckBox/>
                </View>
            </View>
        </View>

        {/* order food summary */}
        <View className="mt-5">
            <Text className="font-bold text-lg">Order Summary</Text>
        </View>
        <View className="flex-col gap-y-6 pb-6">
                <View className="flex-row justify-between border-[#E9E9Ea] py-1">
                   <View className="flex-row gap-x-4">
                        <View>
                            <Image source={require('../../assets/Native-Soup.jpg')} className="w-14 h-14 rounded-lg"/>
                        </View>
                        <View className="">
                            <Text className="text-base">SeaFood Okoro</Text>
                            <Text className="text-sm font-semibold">N4,500</Text>
                        </View>
                   </View>

                    <View className="flex-col justify-between items-end">
                        <View className="flex-row items-center gap-2 ">
                            <Text className="text-sm font-bold">x2</Text>
                        </View>
                    </View>

                </View>

                <View className="flex-row justify-between border-[#E9E9Ea] py-1">
                    <View className="flex-row gap-x-4">
                        <View >
                        <Image source={require('../../assets/coca.png')} className="w-14 h-14 rounded-lg"/>
                        </View>
                        
                        <View>
                            <Text className="text-base">Coke</Text>
                            <View className="flex-row  items-center my-0.5">
                            </View>
                        <Text className="text-sm font-semibold">N250</Text>
                        </View>
                    </View>

                    <View className="flex-col justify-between items-end">
                        <View className="flex-row items-center gap-2 ">
                            <Text className="text-sm font-bold">x2</Text>
                        </View>
                    </View>

                </View>

                <View className="flex-row justify-between border-[#E9E9Ea] py-1">
                    <View className="flex-row gap-x-4">
                        <View>
                        <Image source={require('../../assets/schweppes.png')} className="w-14 h-14 rounded-lg"/>
                        </View>
                        
                        <View>
                            <Text className="text-base">Schweppes</Text>
                            
                        <Text className="text-sm font-semibold">N350</Text>
                        </View>
                    </View>

                    <View className="flex-col justify-between items-end">
                        <View className="flex-row items-center gap-2 ">
                            <Text className="text-sm font-bold">x2</Text>
                        </View>
                    </View>

                </View>
        </View>

        <TotalItems/>  
        </ScrollView>
    </View>
  )
}

export default Checkout