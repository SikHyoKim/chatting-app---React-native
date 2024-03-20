import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BasicHeader from '../pages/BasicHeader';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Dimensions, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const CustomCameraRoll = ({route, navigation}) => {
  const [images, setImages] = useState([]);
  const [selected, setSelectedImage] = useState();

  const imageWidth = width / 4 - 1;

  useEffect(() => {
    FetchImages();
  }, []);

  const FetchImages = async () => {
    CameraRoll.getPhotos({
      first: 6,
    }).then(res => {
      console.log({res});
      setImages(res.edges.map(e => e.node.image));
    });
  };

  const selectImage = (item) => {
    setSelectedImage(item);
    route.params.onSelect(item);
    navigation.goBack('ChatScreen');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectImage(item)}
        style={{
          borderWidth: 0.8,
          borderColor: '#FFF',
          }}>
        <Image source={item} style={{width: imageWidth, height: imageWidth}} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <BasicHeader title={'앨범'} />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={4}
      />
    </SafeAreaView>
  );
};

export default CustomCameraRoll;
