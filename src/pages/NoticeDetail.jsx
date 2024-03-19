import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import BasicHeader from './BasicHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const dummyImage1 = require('../assets/images/fff.png');
const heart = require('../assets/icons/comments.png');
const comments = require('../assets/icons/heart.png');

const {width} = Dimensions.get('window');

const NoticeDetail = ({route}) => {

  const [selectedFilter, setSelectedFilter] = useState();
  const {title, content} = route.params.item;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={title} />
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingHorizontal: 16}}>
          <View
            style={{
              gap: 4,
              margin: 16,
            }}>
            <Text style={{fontSize: 13, color: '#555'}}>
              이벤트 당첨자 안내
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600'}}>{title}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <Image
              source={dummyImage1}
              style={{width: width - 32, height: width * 0.7}}
            />
          </View>
          <View>
            <Text>안녕하세요</Text>
          </View>
          <View
            style={{
              width,
              height: 7,
              backgroundColor: '#EAEAEA',
              marginTop: 16,
              marginLeft: -16,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#F4F4F4',
              marginBottom: 20
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 20}}>
              <Text>댓글</Text>
              <Text>4개</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Text>등록순</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>최신순</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image
                  source={require('../assets/images/dummyProfile7.png')}
                  style={{width: 32, height: 32}}
                />
                <Text>박정아</Text>
              </View>
              <TouchableOpacity>
                <Image source={require('../assets/icons/replyMore.png')} style={{width:24, height: 24}} />
              </TouchableOpacity>
            </View>
            <Text>ㅠㅠ 아쉽게도 이번엔 당첨이 안되었네요..</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 8, marginBottom: 16}}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <Image source={heart} style={{width: 18, height: 18}} />
                <Text>좋아요 4</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <Image source={comments} style={{width: 18, height: 18}} />
                <Text>답글 0</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EAEAEA',
                borderRadius: 20,
                paddingVertical: 11,
                paddingHorizontal: 8,
              }}
              placeholder="답글을 입력해주세요"
            />
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NoticeDetail;
