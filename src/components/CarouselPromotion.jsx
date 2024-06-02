import { View, Text,Dimensions } from 'react-native'
import { useSharedValue } from "react-native-reanimated";
import React,{useRef} from 'react'
import PromotionCard from './PromotionCard' 
import data from './promotionData/data'
import Carousel, {ICarouselInstance,Pagination} from "react-native-reanimated-carousel";

const CarouselPromotion = () => {
    const isCarousel = useRef(null)
    const width = Dimensions.get("window").width;
    const progress = useSharedValue(0)

    const onPressPagination = ( index) => {
      ref.current?.scrollTo({
        /**
         * Calculate the difference between the current index and the target index
         * to ensure that the carousel scrolls to the nearest index
         */
        count: index - progress.value,
        animated: true,
      });
    };

    return (
    <View className="">
        <Carousel
        ref={isCarousel}
        width={width}
        height={width / 2}
        data={data}
        // onProgressChange={progress}
        renderItem={PromotionCard}
        autoPlay={true}
        scrollAnimationDuration={3000}
      />

    {/* <Pagination
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      /> */}
    </View>

    
  )
}

export default CarouselPromotion