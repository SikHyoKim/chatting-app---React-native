import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import ImagePicker from 'react-native-image-crop-picker';

import LeftBubble from '../components/LeftBubble';
import HeaderTitle from '../components/HeaderTitle';
import RightBubble from '../components/RightBubble';
import Toast from '../components/Toast';

const plusicon = require('../assets/icons/Plus.png');
const photoButton = require('../assets/icons/chat/photoButton.png');
const cameraButton = require('../assets/icons/chat/cameraButton.png');
const voiceButton = require('../assets/icons/chat/voiceButton.png');

const {width} = Dimensions.get('window');
const dummy_data = [
  {
    id: 1,
    name: '이민구',
    content: '점심 먹었니 친구야?',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 2,
    name: '나',
    content: '아니 아직 안먹었어, 너는 먹었니?',
    position: 'right',
    profileImgUrl: require('../assets/icons/Plus.png'),
    isOpen: true,
  },
  {
    id: 3,
    name: '나',
    content: '안먹었으면 같이 먹을까?? 먹고싶은 메뉴가 있으면 말해보겠니?',
    position: 'right',
    created_date: '12:03PM',
    profileImgUrl: require('../assets/icons/Plus.png'),
    isOpen: true,
  },
  {
    id: 4,
    name: '이민구',
    content:
      '나는 풍자 또 간집에 나온 소라 편이점의 제육볶음이 너무 먹고싶구나ㅎㅎㅎㅎ',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 5,
    name: '나',
    content: '그럼먹으러 가자구~~',
    created_date: '12:03PM',
    position: 'right',
    profileImgUrl: require('../assets/icons/Plus.png'),
    isOpen: true,
  },
];

const ChatScreen = ({route, navigation}) => {
  
  const {name} = route.params.params;
  const [toastVisible, setToastVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  // AndroidPermission
  async function hasAndroidPermission() {
    const getCheckPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return Promise.all([
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          ),
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
          ),
        ]).then(
          ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
      } else {
        return PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
      }
    };

    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      return true;
    }
    const getRequestPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]).then(
          statuses =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
              PermissionsAndroid.RESULTS.GRANTED,
        );
      } else {
        return PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
      }
    };

    return await getRequestPermissionPromise();
  }
  async function savePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.save(tag, {type, album});
  }

  const onSelect = data => {
    console.log('data', data);
    setSelectedImage(data);
  };

  const goToCameraRoll = () => {
    setModalVisible(false);
    navigation.navigate('CustomCameraRoll', {onSelect: data => onSelect(data)});
  };

  const handleCamera = () => {
    console.log('camera');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainwrapper}>
        <HeaderTitle name={name} navigation={navigation} />
        <View style={styles.chattingscreen}>
          <FlatList
            data={dummy_data}
            renderItem={({item, index}) =>
              item.position === 'left' ? (
                <LeftBubble data={item} />
              ) : (
                <RightBubble data={item} nextData={dummy_data[index + 1]} />
              )
            }
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
              <View style={styles.chatDayWrapper}>
                <Text style={styles.chatDay}>2022년 2월 7일</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {selectedImage && (
          <View style={{position: 'absolute', bottom: 80, right: 16}}>
            <Image source={selectedImage} style={{width: 60, height: 60}} />
          </View>
        )}

        <View style={styles.footContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.Union}>
            <Image style={styles.UnionIcon} source={plusicon} />
          </TouchableOpacity>
          <TextInput
            placeholder="메세지 입력하기"
            style={styles.chattingInput}
          />
        </View>

      </View>
      <Toast
        context={'아직 구현되지 않은 기능입니다.'}
        visible={toastVisible}
        handleCancel={() => setToastVisible(false)}
      />
      <Modal
        isVisible={modalVisible}
        useNativeDriver
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationInTiming={200}
        animationOutTiming={200}
        backdropOpacity={0}
        style={{margin: 0, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <View
          style={{
            width,
            paddingTop: 10,
            backgroundColor: '#FFF',
            height: 176,
          }}>
          <View style={styles.footContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.Union}>
              <Image style={styles.UnionIconTransForm} source={plusicon} />
            </TouchableOpacity>
            <TextInput
              placeholder="메세지 입력하기"
              style={styles.chattingInput}
            />
          </View>
          <View style={{flexDirection: 'row', marginLeft: 40, gap: 40}}>
            <TouchableOpacity
              style={{gap: 4, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => goToCameraRoll()}>
              <Image source={photoButton} style={{width: 48, height: 48}} />
              <Text style={{fontSize: 13, fontWeight: '400', color: '#828282'}}>앨범</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCamera()}
              style={{gap: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={cameraButton} style={{width: 48, height: 48}} />
              <Text style={{fontSize: 13, fontWeight: '400', color: '#828282'}}>카메라</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{gap: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={voiceButton} style={{width: 48, height: 48}} />
              <Text style={{fontSize: 13, fontWeight: '400', color: '#828282'}}>음성</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
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
  footContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  Union: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    marginRight: 8,
  },
  UnionIcon: {
    width: 12,
    height: 12,
  },
  UnionIconTransForm: {
    width: 12,
    height: 12,
    transform: [{rotate: '45deg'}],
  },
  chattingInput: {
    paddingHorizontal: 12,
    borderRadius: 20,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    flex: 1,
  },
});

export default ChatScreen;
