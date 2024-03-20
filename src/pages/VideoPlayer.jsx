import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import BasicHeader from './BasicHeader';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const dummyVideo =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
  const dummyLocalVideo = require('../assets/Video/dummy.mp4');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={'비디오'} />
      <Video
        source={dummyLocalVideo}
        ref={videoRef}
        style={{width: 320, height: 320}}
        muted
        playInBackground={false}
      />
    </SafeAreaView>
  );
};

export default VideoPlayer;
