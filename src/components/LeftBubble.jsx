import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const userporfile = require('../assets/images/dummyProfile.png');
const leftBubbleTriangle = require('../assets/icons/leftBubbleTriangle.png');

const LeftBubble = ({chatText}) => {
  return (

    <View style={styles.chatRowWrapper}>
      <Image style={{width: 40, height: 40}} source={userporfile} />
      <View>
        <Text style={{marginLeft: 8}}>이민구</Text>
        <View style={styles.bubbleWrapper}>
          <Image style={styles.leftRectangleimg} source={leftBubbleTriangle} />
          <View style={styles.bubbleChat}>
            <Text style={styles.chatTextInput}>{chatText}</Text>
          </View>
        </View>
      </View>
      <View style={styles.chatTimeWrapper}>
        <Text style={styles.chatTime}>12:03PM</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

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

export default LeftBubble;