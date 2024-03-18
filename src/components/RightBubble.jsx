import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const rightBubbleTriangle = require('../assets/icons/rightBubbleTriangle.png');

const RightBubble = ({data, nextData}) => {
  return (
    <View style={styleMychat.mychatRowWrapper}>
      {nextData?.position !== data?.position && data.isOpen ? (
        <View style={styleMychat.mybubbleWrapper}>
          <Text style={styles.chatTime}>읽음</Text>
          <Text style={styles.chatTime}>{data.created_date}</Text>
        </View>
      ) : nextData?.position !== data?.position && !data.isOpen ? (
        <View style={styleMychat.mybubbleWrapper}>
          <Text style={styles.chatTime}>{data.created_date}</Text>
        </View>
      ) : (
        <View />
      )}
      <View style={styleMychat.myBubbleChat}>
        <Text style={styleMychat.chatTextInput}>{data.content}</Text>
      </View>
      <Image
        style={styleMychat.rigthRectangleimg}
        source={rightBubbleTriangle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatTime: {
    fontSize: 12,
    color: '#737373',
  },
});

const styleMychat = StyleSheet.create({
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

export default RightBubble;
