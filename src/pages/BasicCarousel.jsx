import React from 'react';
import {Image, SafeAreaView, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    content: '점심 먹었니 친구야?',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 2,
    name: '나',
    content: '아니 아직 안먹었어, 너는 먹었니?',
    position: 'right',
    profileImgUrl: require('../assets/icons/Plus.png'),
    isOpen: true,
  },
  {
    id: 3,
    name: '나',
    content: '안먹었으면 같이 먹을까?? 먹고싶은 메뉴가 있으면 말해보겠니?',
    position: 'right',
    created_date: '12:03PM',
    profileImgUrl: require('../assets/icons/Plus.png'),
    isOpen: true,
  },
  {
    id: 4,
    name: '이민구',
    content:
      '나는 풍자 또 간집에 나온 소라 편이점의 제육볶음이 너무 먹고싶구나ㅎㅎㅎㅎ',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 5,
    name: '나',
    content: '그럼먹으러 가자구~~',
    created_date: '12:03PM',
    position: 'right',
    profileImgUrl: require('../assets/icons/Plus.png'),
    isOpen: true,
  },
];

const {width} = Dimensions.get('window');

const BasicCarousel = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image source={item.profileImgUrl} />
        <Text>{item.content}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>carousel</Text>
        <Carousel
          data={dummy_data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={320}
        />
      </View>
    </SafeAreaView>
  );
};

export default BasicCarousel;
