import React from 'react';
import {Text, Flex, Image, Input, Button, ScrollView} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/background';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import {Dimensions} from 'react-native';

const SignUp = ({navigation}) => {
  const height = Dimensions.get('screen').height;
  return (
    <Flex flex={1} safeArea>
      <ScrollView keyboardShouldPersistTaps="always">
        <Flex flex={1}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#151F28', '#151F28AA']}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}>
            <Flex>
              <Flex h={height / 5} justifyContent="center" alignItems="center">
                <Image
                  w={194}
                  h={65}
                  alt="j_play"
                  source={require('../assets/j_play.png')}
                />
              </Flex>

              <Flex h={height - height / 5} justifyContent="center" px={4}>
                <Flex>
                  <Text my={5} textAlign="center" color="#FFFFFF">
                    Enter your mobile number or email to continue
                  </Text>
                  <Flex bg="#fff" rounded={6}>
                    <Input
                      borderRadius={6}
                      px={4}
                      variant="unstyled"
                      placeholder="Mobile number"
                      h={50}
                      InputRightElement={
                        <Text mr={4} fontSize={22}>
                          <Icon name="text-box-check-outline" size={20} />
                        </Text>
                      }
                    />
                  </Flex>

                  <Button
                    mt={4}
                    h={50}
                    borderRadius={6}
                    backgroundColor="#BC082D"
                    onPress={() => navigation.navigate('Subscription')}>
                    Continue
                  </Button>
                  <Text mt={4} textAlign="center" color="#FFFFFF">
                    ------------------ Or Via --------------------
                  </Text>
                  <Button
                    bg="transparent"
                    borderWidth={1}
                    variant="unstyled"
                    borderColor="#DFE9F0"
                    rounded={6}
                    leftIcon={<Icon color="#fff" name="apple" size={24} />}
                    h={50}
                    mt={4}>
                    Sign in with Apple
                  </Button>
                  <Button
                    bg="transparent"
                    borderWidth={1}
                    variant="unstyled"
                    borderColor="#DFE9F0"
                    rounded={6}
                    leftIcon={<Icon1 color="#fff" name="facebook" size={24} />}
                    h={50}
                    mt={4}>
                    Sign in with Facebook
                  </Button>
                  <Button
                    bg="transparent"
                    borderWidth={1}
                    variant="unstyled"
                    borderColor="#DFE9F0"
                    rounded={6}
                    leftIcon={
                      <Icon color="#fff" name="google-plus" size={24} />
                    }
                    h={50}
                    mt={4}>
                    Sign in with Google
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </LinearGradient>
          <Background />
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default SignUp;
