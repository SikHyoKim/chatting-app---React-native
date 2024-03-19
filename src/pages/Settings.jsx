import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Switch,
  StyleSheet,
} from 'react-native';
import BasicHeader from './BasicHeader';

const MydummyProfile = require('../assets/icons/dummyMyprofile.png');
const rightArrow = require('../assets/icons/rightArrow.png');
const myPageMenuArrow = require('../assets/icons/myPageMenuArrow.png')

const menuData = [
  {
    id: 1,
    title: '알림받기',
    page: '',
    icon: require('../assets/icons/myPageAlert.png'),
  },
  {
    id: 2,
    title: '친구',
    page: 'Home',
    icon: require('../assets/icons/myPageFriend.png'),
  },
  {
    id: 3,
    title: '공지사항',
    page: 'Notice',
    icon: require('../assets/icons/myPageNotice.png'),
  },
  {
    id: 4,
    title: '채팅/보안',
    page: '',
    icon: require('../assets/icons/myPageSecurity.png'),
  },
  {
    id: 5,
    title: '더보기',
    page: '',
    icon: require('../assets/icons/myPageMore.png'),
  },
];

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={'설정'} navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
          margin: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#F2F2F2',
          paddingBottom: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Image source={MydummyProfile} style={{width: 56, height: 56}} />
          <Text style={{fontWeight: 'bold', color: '#333', fontSize: 18}}>
            김이동
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#4F4F4F',
              fontWeight: '400',
              lineHeight: 17.47,
            }}>
            프로필 수정
          </Text>
          <Image
            source={rightArrow}
            style={{width: 26, height: 26, color: '#4F4F4F'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          paddingBottom: 16
        }}>
        <View style={{gap: 12}}>
          <View style={{gap: 2}}>
            <Text style={{fontWeight: '400', fontSize: 15, color: '#828282'}}>
              계정ID
            </Text>
            <Text style={{fontWeight: '500', fontSize: 15, color: '#333'}}>
              iedong@naver.com
            </Text>
          </View>
          <View style={{gap: 2}}>
            <Text style={{fontWeight: '400', fontSize: 15, color: '#828282'}}>
              계정 연락처
            </Text>
            <Text style={{fontWeight: '500', fontSize: 15, color: '#333'}}>
              010-1234-1234
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#4F4F4F',
              fontWeight: '400',
              lineHeight: 17.47,
            }}>
            계정 설정
          </Text>
          <Image
            source={rightArrow}
            style={{width: 26, height: 26, color: '#4F4F4F'}}
          />
        </TouchableOpacity>
      </View>
      {/* menu */}
      <View>
        {menuData.map((e, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(e.page)}
            style={[
              styles.menuContainer,
              menuData.length - 1 === i && {
                borderBottomColor: '#F2F2F2',
                borderBottomWidth: 1,
              },
            ]}>
            <View style={{flexDirection: 'row',alignItems:'center', gap: 4}}>
              <Image source={e.icon} style={{width: 20, height: 20}} />
              <Text style={{fontSize: 16, color: '#4F4F4F'}}>{e.title}</Text>
            </View>
            <View>
              {e.id === 1 ? (
                <Switch
                  trackColor={{false: '#767577', true: '#5FBCFF'}}
                  thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              ) : (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'center',
                }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#4F4F4F',
                      fontWeight: '400',
                      lineHeight: 17.47,
                    }}>
                    계정 설정
                  </Text>
                  <Image
                    source={myPageMenuArrow}
                    style={{width: 20, height: 20, color: '#4F4F4F'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2',
  },
});

export default Settings;
