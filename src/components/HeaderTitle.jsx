import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const leftArrow = require('../assets/icons/leftArrow.png');

const HeaderTitle = () => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity>
        <Image style={styles.leftArrowIcons} source={leftArrow} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>이민구</Text>
      <Image style={styles.leftArrowIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default HeaderTitle;
