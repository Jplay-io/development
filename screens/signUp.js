import React from 'react';
import {Text, Flex, Image, Input, Button, Center} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/background';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <KeyboardAwareScrollView> */}
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
        <Flex flex={1}>
          <Flex flex={1} justifyContent="center" alignItems="center">
            <Image
              w={194}
              h={65}
              alt="j_play"
              source={require('../assets/j_play.png')}
            />
          </Flex>

          <Flex flex={4} justifyContent="center" pb={12} px={4} flex={4}>
            <Text my={5} textAlign="center" color="#FFFFFF">
              Enter your mobile number or email to continue
            </Text>
            <Input
              borderRadius={6}
              borderWidth={0}
              px={4}
              placeholder="Mobile number"
              h={50}
              backgroundColor="white"
              InputRightElement={
                <Text mr={4} fontSize={22}>
                  <Icon name="text-box-check-outline" size={20} />
                </Text>
              }
            />

            <Button
              mt={4}
              h={50}
              borderRadius={6}
              backgroundColor="#BC082D"
              onPress={() => navigation.navigate('Subscription')}>
              Continue
            </Button>
            <Text mt={4} textAlign="center" color="#FFFFFF">
              Or Via
            </Text>
            <Button
              rounded={6}
              leftIcon={<Icon color="#fff" name="apple" size={24} />}
              h={50}
              mt={4}>
              Sign in with Apple
            </Button>
            <Button
              rounded={6}
              leftIcon={<Icon1 color="#fff" name="facebook" size={24} />}
              h={50}
              mt={4}>
              Sign in with Facebook
            </Button>
            <Button
              rounded={6}
              leftIcon={<Icon color="#fff" name="google-plus" size={24} />}
              h={50}
              mt={4}>
              Sign in with Google
            </Button>
          </Flex>
        </Flex>
      </LinearGradient>
      <Background />
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default SignUp;
