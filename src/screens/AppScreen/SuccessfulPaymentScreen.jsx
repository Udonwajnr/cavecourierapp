import { View, Text,StyleSheet,Button, Touchable } from 'react-native'
import React from 'react'
import { useRef,useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native';

const SuccessfulPaymentScreen = () => {
    const animation = useRef(null);
    useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
        <View className="px-3 flex-1">
            <View className="bg-white flex-row justify-center items-center">
                <LottieView
                autoPlay
                loop={true}
                // ref={animation}
                style={{
                    width: 300,
                    height: 300,
                    // backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("../../components/lottieAnimation/Animation - 1719335706091.json")}
                
                />
            </View>

            <View className="items-center justify-center flex-col px-6">
                <Text className="text-2xl font-semibold text-center">Order Confirmed!</Text>
                <Text className="text-[#8C9994] text-center mt-3">Your order was Placed successfully, You will soon receive your order confirmation via email</Text>
            </View>


             {/*navigation */}
             <View className="flex-row items-center justify-center">
                <TouchableOpacity className="mt-4">
                    <Text className="text-[#2EC76D] underline">Order details</Text>
                </TouchableOpacity>
             </View>

             <View className="mt-24 w-full">
                <TouchableOpacity className="py-3 bg-[#2EC76D] rounded-lg">
                    <Text className="text-white text-base text-center">Track Order</Text>
                </TouchableOpacity>

                <TouchableOpacity className="py-3 bg-[#E9E9EA] rounded-lg mt-6">
                    <Text className="text-[#071731] text-base text-center">Back to Home</Text>
                </TouchableOpacity>

             </View>
</View>


  )
}

export default SuccessfulPaymentScreen

const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });