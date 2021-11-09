import React from 'react';
import { Flex } from 'native-base';
import VideoPlayer from 'react-native-video-player';
import { useNavigation, useRoute } from "@react-navigation/native"
const Video = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { url } = route.params
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <VideoPlayer
        video={{
          uri: url,
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
