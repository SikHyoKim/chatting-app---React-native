import dayjs from 'dayjs';
import React from 'react';
import {Text, View} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

const BasicCalendar = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Calendar initialDate={dayjs(new Date()).format('YYYY-MM-DD')} />
    </View>
  );
};

export default BasicCalendar;
