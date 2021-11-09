import React from 'react';
import {Column, Row, Image} from 'native-base';
import {Dimensions} from 'react-native';

const Background = () => {
  const width = Dimensions.get('window').width;
  const heigth = Dimensions.get('window').height;
  return (
    <Column
      pt={10}
      justifyContent="center"
      alignItems="center"
      bg="black"
      flex={1}
      h={'100%'}
      position="absolute"
      zIndex={-1}>
      <Row>
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie1"
          source={require('../assets/image1.png')}
        />
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie2"
          source={require('../assets/image2.png')}
        />
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie3"
          source={require('../assets/image3.png')}
        />
      </Row>
      <Row>
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie4"
          source={require('../assets/image4.png')}
        />
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie5"
          source={require('../assets/image5.png')}
        />
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie6"
          source={require('../assets/image6.png')}
        />
      </Row>
      <Row>
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie7"
          source={require('../assets/image7.png')}
        />
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie8"
          source={require('../assets/image8.png')}
        />
        <Image
          w={width / 2.8}
          h={heigth / 5}
          m={3}
          borderRadius={15}
          alt="movie9"
          source={require('../assets/image9.png')}
        />
      </Row>
    </Column>
  );
};

export default Background;
