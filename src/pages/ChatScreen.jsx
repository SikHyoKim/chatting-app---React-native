import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LeftBubble from '../components/LeftBubble';
import HeaderTitle from '../components/HeaderTitle';
import RightBubble from '../components/RightBubble';
import Toast from '../components/Toast';

const plusicon = require('../assets/icons/Plus.png');

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

const ChatScreen = () => {
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainwrapper}>
        <HeaderTitle />
        <View style={styles.chattingscreen}>
          <FlatList
            data={dummy_data}
            renderItem={({item, index}) =>
              item.position === 'left' ? (
                <LeftBubble data={item} />
              ) : (
                <RightBubble data={item} nextData={dummy_data[index + 1]} />
              )
            }
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
              <View style={styles.chatDayWrapper}>
                <Text style={styles.chatDay}>2022년 2월 7일</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.footContainer}>
          <TouchableOpacity
            onPress={() => setToastVisible(!toastVisible)}
            style={styles.Union}>
            <Image style={styles.UnionIcon} source={plusicon} />
          </TouchableOpacity>
          <TextInput
            placeholder="메세지 입력하기"
            style={styles.chattingInput}
          />
        </View>
      </View>
      <Toast
        context={'아직 구현되지 않은 기능입니다.'}
        visible={toastVisible}
        handleCancel={() => setToastVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainwrapper: {
    flex: 1,
  },
  chattingscreen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  chatDayWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatDay: {
    fontSize: 12,
    color: '#828282',
    paddingTop: 16,
    marginBottom: 16,
  },
  footContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  Union: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    marginRight: 8,
  },
  UnionIcon: {
    width: 12,
    height: 12,
  },
  chattingInput: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 20,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    flex: 1,
  },
});

export default ChatScreen;
