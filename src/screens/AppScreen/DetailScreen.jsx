import { View, Text,Image,TouchableOpacity,StyleSheet, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from '../../components/CheckBox';
import BottomCart from '../../components/BottomCart';

const DetailScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className="relative flex-1 flex-col bg-[#E9E9EA] ">
      <ScrollView className=" bg-[#FBFBFB]">
        <View className="relative">
            <View className="">
              <View className="h-[350px]">
                  <Image source={require("../../assets/jellof2.jpg")} className="w-full h-full"/>
              </View>
              <View className="flex justify-between flex-row absolute top-6 w-full px-3">
                  <TouchableOpacity className="p-3 bg-white rounded-full">
                  <Entypo name="chevron-thin-left" size={24} color="#8C8994" />
                </TouchableOpacity>

                <TouchableOpacity className="p-3 bg-white rounded-full">
                  <Feather name="bookmark" size={24} color="#8C8994"/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* details */}
          <View className=" mt-4 px-3">
            <View className="flex-row items-center gap-x-3">
                  <View>
                  <Text className="text-xl font-bold">Seafood Okra</Text>  
                  </View>
                  <View className="flex-row items-center ">
                  <Text className="font-bold text-xs">4.5 </Text>
                      <Entypo name="star" size={15} color="rgb(232,176,44)" />
                  <Text className="text-xs text-[#8C8994]">(100+)</Text>
                  </View> 
                  <View>
                      <TouchableOpacity>
                          <Text className="text-[#2EC76D] font-bold">See All Review</Text>
                      </TouchableOpacity>
                  </View>
              </View>  
            <Text className="text-[#8C8994] font-bold text-sm">Tasty Bites</Text>
            <View className="flex-row items-center justify-between mt-1">
              <View className="flex-row items-center gap-2">
                <Text className="text-2xl ">N4,550</Text>
                <Text className="text-[#8C8994] line-through">N7,000</Text>
              </View>

              <View className="flex-row items-center gap-2 ">
                <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                  <AntDesign name="minus" size={15} color="#2EC76D" />
                </TouchableOpacity>
                <Text className="text-xl">2</Text>
                <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                  <AntDesign name="plus" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            {/* description */}
            <View className="mt-4">
              <Text className="text-[#8C8994]">
                Indulge in the exquiste flavors of our Seafood Okra, a tantalizing dish that combines the best of Nigerian Cuisine with a seafood twist.This traditional delicacy is a symphony of tender okra pods,simm..<Text className="text-[#2EC76D] text-sm">Read More</Text>
              </Text>
            </View>

            {/* add a drink */}
            <View >
              <Text>Add a Drink</Text>
              <View>
              <View className="flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                <CheckBox/>
                <Text className="ml-3 text-lg">Sprite</Text>
                </View>

                <View className="flex-row items-center gap-2 ">
                <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                    <AntDesign name="minus" size={12} color="#2EC76D" />
                </TouchableOpacity>
                <Text className="text-sm">2</Text>
                <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                  <AntDesign name="plus" size={12} color="white" />
                </TouchableOpacity>
              </View>
                
              </View>

              <View className="flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                <CheckBox/>
                <Text className="ml-3 text-lg">Coke</Text>
                </View>

                <View className="flex-row items-center gap-2 ">
                <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                    <AntDesign name="minus" size={12} color="#2EC76D" />
                </TouchableOpacity>
                <Text className="text-sm">2</Text>
                <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                  <AntDesign name="plus" size={12} color="white" />
                </TouchableOpacity>
              </View>
                
              </View>

              <View className="flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                <CheckBox/>
                <Text className="ml-3 text-lg">Fanta</Text>
                </View>

                <View className="flex-row items-center gap-2 ">
                  <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                      <AntDesign name="minus" size={12} color="#2EC76D" />
                  </TouchableOpacity>
                  <Text className="text-sm">2</Text>
                  <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                    <AntDesign name="plus" size={12} color="white" />
                  </TouchableOpacity>
              </View>
                
              </View>

              <View className="flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                <CheckBox/>
                <Text className="ml-3 text-lg">Fanta</Text>
                </View>

                <View className="flex-row items-center gap-2 ">
                  <TouchableOpacity className="bg-white rounded-full border border-[#2EC76D] p-1.5">
                      <AntDesign name="minus" size={12} color="#2EC76D" />
                  </TouchableOpacity>
                  <Text className="text-sm">2</Text>
                  <TouchableOpacity className="bg-[#2EC76D] p-1.5 rounded-full">
                    <AntDesign name="plus" size={12} color="white" />
                  </TouchableOpacity>
              </View>
                
              </View>

              </View>
            </View>
        </View>

      </ScrollView>
      <BottomCart/>
    </View>
  )
}

export default DetailScreen

