import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const SearchInput = () => {
  return (
    <View className="mt-3 flex-row h-12">
        <View className="bg-[#E9E9EA] rounded-l-2xl pl-3 pr-2 items-center justify-center">
            <Feather name="search" size={24} color="#8C8994" />
        </View>
        <TextInput className=" flex-1 bg-[#E9E9EA]" placeholder='Search restaurants or foods' placeholderTextColor={"#8C8994"}/>
        <View className="rounded-r-2xl bg-[#E9E9EA] items-center justify-center pr-3 pl-2 ">
           <View className="bg-[#FBFBFB] rounded-full p-1">
                <Octicons name="filter" size={24} color="#2EC76D" />
           </View>
        </View>
    </View>
  )
}

export default SearchInput