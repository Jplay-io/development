import React from 'react';
import {Flex} from 'native-base';
import VideoPlayer from 'react-native-video-player';

const Video = ({navigation}) => {
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoWidth={800}
        videoHeight={450}
        autoplay
        thumbnail={require('../../assets/image1.png')}
      />
    </Flex>
  );
};

export default Video;
