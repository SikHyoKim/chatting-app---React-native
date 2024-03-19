import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import BasicHeader from './BasicHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const dummy_data = [
  {
    id: 1,
    title: '12월 24일 크리스마스 이벤트 다첨자 안내',
    content: `안녕하세요, 여러분!

    저희의 크리스마스 이벤트에 참여해 주셔서 진심으로 감사드립니다. 많은 분들이 응모해주셔서 정말 기쁘게 생각합니다. 이벤트의 목적은 우리의 고객들께 감사의 마음을 전하기 위한 것이었는데, 여러분의 따뜻한 관심과 참여에 깊은 감사를 표합니다.
    
    그럼, 이제 크리스마스 이벤트 응모 추첨 당첨자를 발표하겠습니다. 아래는 당첨자 명단입니다.
    
    이모씨 (이메일: imo@example.com)
    박씨 (이메일: park@example.com)
    김씨 (이메일: kim@example.com)
    최씨 (이메일: choi@example.com)
    이씨 (이메일: lee@example.com)
    당첨되신 분들께는 개별적으로 이메일을 통해 안내드리겠습니다. 상품 수령과 관련된 자세한 사항은 이메일을 확인해 주시기 바랍니다.
    
    다시 한 번 이벤트에 참여해주신 모든 분들께 진심으로 감사드립니다. 앞으로도 더 많은 이벤트와 혜택으로 보답하겠습니다.
    
    즐거운 크리스마스를 기대합니다!
    
    감사합니다.`,
    created_date: '2023년 12월 24일',
  },
  {
    id: 2,
    title: '12월 25일 크리스마스 이벤트 다첨자 안내',
    content: `안녕하세요, 여러분!

    저희의 크리스마스 이벤트에 참여해 주셔서 진심으로 감사드립니다. 많은 분들이 응모해주셔서 정말 기쁘게 생각합니다. 이벤트의 목적은 우리의 고객들께 감사의 마음을 전하기 위한 것이었는데, 여러분의 따뜻한 관심과 참여에 깊은 감사를 표합니다.
    
    그럼, 이제 크리스마스 이벤트 응모 추첨 당첨자를 발표하겠습니다. 아래는 당첨자 명단입니다.
    
    이모씨 (이메일: imo@example.com)
    박씨 (이메일: park@example.com)
    김씨 (이메일: kim@example.com)
    최씨 (이메일: choi@example.com)
    이씨 (이메일: lee@example.com)
    당첨되신 분들께는 개별적으로 이메일을 통해 안내드리겠습니다. 상품 수령과 관련된 자세한 사항은 이메일을 확인해 주시기 바랍니다.
    
    다시 한 번 이벤트에 참여해주신 모든 분들께 진심으로 감사드립니다. 앞으로도 더 많은 이벤트와 혜택으로 보답하겠습니다.
    
    즐거운 크리스마스를 기대합니다!
    
    감사합니다.`,
    created_date: '2023년 12월 25일',
  },
];

const Notice = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NoticeDetail', {item})}
        style={{padding: 16, borderBottomWidth: 1, borderBottomColor: '#333'}}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={'공지사항'} />
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notice;
