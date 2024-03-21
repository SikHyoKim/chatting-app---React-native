import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import fonts from '../styles/fonts';
import {getMyFriendList, getMyInfo} from '../apis/user';

const searchIcon = require('../assets/icons/search.png');
const addIcon = require('../assets/icons/add.png');
const alertIcon = require('../assets/icons/alert.png');
const settingIcon = require('../assets/icons/setting.png');
const MydummyProfile = require('../assets/icons/dummyMyprofile.png');
const rightArrow = require('../assets/icons/rightArrow.png');

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호',
  },
  {
    id: 2,
    name: '정태영',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호빵맨펀',
  },
  {
    id: 3,
    name: '박찬웅',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호빵맨',
  },
  {
    id: 4,
    name: '김종훈',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호빵',
  },
  {
    id: 5,
    name: '강봉명',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호다라다랃라',
  },
  {
    id: 6,
    name: '강봉명',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호다라다랃라',
  },
  {
    id: 7,
    name: '강봉명',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호다라다랃라',
  },
  {
    id: 8,
    name: '강봉명',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야호다라다랃라',
  },
];

const Home = ({navigation}) => {
  const [myInfo, setMyInfo] = useState();
  const [friendList, setFriendList] = useState([]);
  const [friendNumber, setFriendNumber] = useState();

  useEffect(() => {
    async function getMyInfoApi() {
      const res = await getMyInfo();
      setMyInfo(res.data);
      console.log(res);
    }
    getMyInfoApi();
  }, []);

  useEffect(() => {
    getMyFriendApi(myInfo?.userId);
  }, [myInfo?.userId]);

  const getMyFriendApi = async () => {
    const res = await getMyFriendList(myInfo?.userId);
    console.log(res);
    setFriendList(res.data.lists);
    setFriendNumber(res.data.number);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {params: item})}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
        }}>
        <Image
          source={{url: item.profileImg}} style={{width: 40, height: 40}} />
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#828282'}}>{item.introduce}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => {
    return (
      <View
        style={{
          marginBottom: 16,
          marginVertical: 16,
          flexDirection: 'row',
          gap: 4,
          alignItems: 'center',
        }}>
        <Text style={{ fontWeight: '400', color: '#828282'}}>친구</Text>
        <Text style={{fontSize: 14, color: '#4F4F4F'}}>{friendNumber}명</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            gap: 8,
          }}>
          <TouchableOpacity>
            <Image source={searchIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={addIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={alertIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={settingIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,

            marginTop: 16,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center', gap: 2}}>
            <Text style={{fontSize: 18, color: '#333', fontFamily: fonts.PRETENDARD[600]}}>
              김이동
            </Text>
            <Text style={{fontWeight: '500', fontSize: 14, color: '#828282'}}>
              D-day37
            </Text>
          </View>
          <Image source={MydummyProfile} style={{width: 56, height: 56}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: '#F2F2F2',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingVertical: 16,
            gap: 4,
          }}>
          <View style={{maxWidth: 321, gap: 4}}>
            <Text style={{fontSize: 16, color: '#000'}}>추천 친구</Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 14, fontWeight: '400', color: '#828282'}}>
              엘비스프레슬리, 요아소비, 요네즈켄시, 박보영, 크레용신짱구
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={rightArrow} style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginBottom: 40}}>
          <FlatList
            data={friendList}
            renderItem={renderItem}
            keyExtractor={item => item.userId}
            ListHeaderComponent={renderListHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
