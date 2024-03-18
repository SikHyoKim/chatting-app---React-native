import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AlertModal from '../components/AlertModal';

const {width, height} = Dimensions.get('screen');

const Detail = ({route, navigation}) => {
  const [isVisible, setIsvisivle] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsvisivle(!isVisible)}>
        <Text>모달 오픈</Text>
      </TouchableOpacity>
      <Text>Detail {route.params.test}</Text>
      <AlertModal
        isVisible={isVisible}
        okText={'알겠습니다'}
        noText={'닫기'}
        headerTitle={'디테일 화면입니다'}
        onPressNo={() => setIsvisivle(!isVisible)}
        onPressOk={() => setIsvisivle(!isVisible)}
      />
    </View>
  );
};

export default Detail;
