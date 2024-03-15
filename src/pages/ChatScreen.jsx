import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LeftBubble from '../components/LeftBubble';

const leftArrow = require('../assets/icons/leftArrow.png');
const rightBubbleTriangle = require('../assets/icons/rightBubbleTriangle.png');

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainwrapper}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Image style={styles.leftArrowIcons} source={leftArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>이민구</Text>
          <Image style={styles.leftArrowIcons} />
        </View>
        <View style={styles.chattingscreen}>
          <View style={styles.chatDayWrapper}>
            <Text style={styles.chatDay}>2022년 2월 7일</Text>
          </View>

          <LeftBubble chatText={'점심 먹었니 친구야?'} />

          <View style={styleMychat.myChatContainer}>
            <View style={styleMychat.mychatRowWrapper}>
              <View style={styleMychat.myBubbleChat}>
                <Text style={styleMychat.chatTextInput}>
                  아니 아직 안먹었어, 너는 먹었니?
                </Text>
              </View>
              <Image
                style={styleMychat.rigthRectangleimg}
                source={rightBubbleTriangle}
              />
            </View>
            <View style={styleMychat.mychatRowWrapper}>
              <View style={styleMychat.mybubbleWrapper}>
                <Text style={styles.chatTime}>읽음</Text>
                <Text style={styles.chatTime}>12:03PM</Text>
              </View>
              <View style={styleMychat.myBubbleChat}>
                <Text style={styleMychat.chatTextInput}>
                  안먹었으면 같이 먹을까?? 먹고싶은 메뉴가 있으면 말해보겠니?
                </Text>
              </View>
            </View>
          </View>

          <LeftBubble
            chatText={
              '나는 풍자 또 간집에 나온 소라 편이점의 제육볶음이 너무 먹고싶구나ㅎㅎㅎㅎ'
            }
          />
          <View style={styleMychat.myChatContainer}>
            <View style={styleMychat.mychatRowWrapper}>
              <View style={styleMychat.mybubbleWrapper}>
                <Text style={styles.chatTime}>읽음</Text>
                <Text style={styles.chatTime}>12:03PM</Text>
              </View>
              <View style={styleMychat.myBubbleChat}>
                <Text style={styleMychat.chatTextInput}>그럼먹으러 가자구~~</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
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
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  leftArrowIcons: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 19.97,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
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
  chatRowWrapper: {
    flexDirection: 'row',
    marginTop: 16,
  },
  bubbleWrapper: {
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 8,
  },
  leftRectangleimg: {
    width: 8,
    height: 8,
    marginTop: 12,
  },
  bubbleChat: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    maxWidth: 232,
  },
  chatTextInput: {
    alignItems: 'center',
    fontSize: 15,
    lineHeight: 22.5,
  },
  chatTimeWrapper: {
    justifyContent: 'flex-end',
    marginLeft: 4,
  },
  chatTime: {
    fontSize: 12,
    color: '#737373',
  },
});

const styleMychat = StyleSheet.create({
  myChatContainer: {
    marginTop: 12,
    marginRight: 8,
  },
  mychatRowWrapper: {
    marginTop: 4,
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  myBubbleChat: {
    backgroundColor: '#6297FF',
    marginTop: 8,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    maxWidth: 232,
  },
  chatTextInput: {
    alignItems: 'center',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#FFF',
  },
  rigthRectangleimg: {
    position: 'absolute',
    right: -8,
    width: 8,
    height: 8,
    marginTop: 14,
  },
  mybubbleWrapper: {
    gap: 2,
    flexDirection: 'row',
    marginRight: 4,
    justifyContent: 'center',
    marginTop: 'auto',
  },
});

export default ChatScreen;
