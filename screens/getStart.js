import React from 'react';
import {Text, Image, Flex, Button, Column, Row, StatusBar} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/background';

const GetStart = ({navigation}) => {
  return (
    <Flex safeArea flex={1}>
      <StatusBar backgroundColor="black" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#151F28', '#151F28AA']}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
        <Flex h={40} justifyContent="center" alignItems="center">
          <Image
            w={194}
            h={65}
            alt="j_play"
            source={require('../assets/j_play.png')}
          />
        </Flex>

        <Flex justifyContent="flex-end" pb={12} px={4} flex={4}>
          <Text textAlign="center" color="#FFFFFF">
            Watch millions of films and
          </Text>
          <Text textAlign="center" color="#FFFFFF">
            Tv Shows from the heart of Japan
          </Text>

          <Button
            mt={8}
            h={60}
            backgroundColor="#BC082D"
            onPress={() => navigation.navigate('signUp')}>
            Login Or New Account
          </Button>
        </Flex>
      </LinearGradient>
      <Background />
    </Flex>
  );
};

export default GetStart;