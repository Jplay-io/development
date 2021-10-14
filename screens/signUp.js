import React from 'react';
import {Text, Flex, Image, Input, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/background';

const SignUp = ({navigation}) => {
  return (
    <Flex safeArea flex={1}>
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

        <Flex justifyContent="center" pb={12} px={4} flex={4}>
          <Text my={5} textAlign="center" color="#FFFFFF">
            Enter your mobile number or email to continue
          </Text>
          <Input h={50} backgroundColor="white" />

          <Button
            mt={4}
            h={50}
            backgroundColor="#BC082D"
            onPress={() => navigation.navigate('Subscription')}>
            Continue
          </Button>
          <Text mt={4} textAlign="center" color="#FFFFFF">
            Or Via
          </Text>
          <Button h={50} mt={4}>
            Sign in with Apple
          </Button>
          <Button h={50} mt={4}>
            Sign in with Facebook
          </Button>
          <Button h={50} mt={4}>
            Sign in with Google
          </Button>
        </Flex>
      </LinearGradient>
      <Background />
    </Flex>
  );
};

export default SignUp;
