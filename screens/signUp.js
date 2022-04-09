import React, {useState} from 'react';
import {
  Text,
  Flex,
  Image,
  Input,
  Button,
  ScrollView,
  Row,
  Center,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/background';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import {Dimensions, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const height = Dimensions.get('screen').height;
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    if (signup) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('Subscription');
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          navigation.navigate('Subscription');
          console.log('User  signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };

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
            <Flex flex={1} pb={10}>
              <Flex h={height / 5} justifyContent="center" alignItems="center">
                <Image
                  w={194}
                  h={65}
                  alt="j_play"
                  source={require('../assets/j_play.png')}
                />
              </Flex>

              <Flex justifyContent="center" px={4}>
                <Flex>
                  <Text
                    fontSize={20}
                    fontFamily="Montserrat-Bold"
                    textAlign="center"
                    color="#FFFFFF">
                    {signup ? 'Sign Up' : 'Sign In'}
                  </Text>
                  <Text my={5} textAlign="center" color="#FFFFFF">
                    Enter your mobile number or email to continue
                  </Text>
                  <Flex bg="#fff" rounded={6}>
                    <Input
                      borderRadius={6}
                      px={4}
                      variant="unstyled"
                      placeholder="Mobile number or email"
                      onChangeText={val => setEmail(val)}
                      h={50}
                      InputRightElement={
                        <Text mr={4} fontSize={22}>
                          <Icon name="text-box-check-outline" size={20} />
                        </Text>
                      }
                    />
                  </Flex>

                  <Flex bg="#fff" rounded={6} mt={4}>
                    <Input
                      borderRadius={6}
                      px={4}
                      variant="unstyled"
                      onChangeText={val => setPassword(val)}
                      placeholder="Password"
                      h={50}
                    />
                  </Flex>

                  <Button
                    mt={4}
                    h={50}
                    borderRadius={6}
                    backgroundColor="#BC082D"
                    onPress={submitHandler}>
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
                    {signup ? 'Sign up with Apple' : 'Sign in with Apple'}
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
                    {signup ? 'Sign up with Facebook' : 'Sign in with Facebook'}
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
                    {signup ? 'Sign up with Google' : 'Sign in with Google'}
                  </Button>
                  <Center>
                    <Row my={2}>
                      {signup ? (
                        <Text color="#fff">Already have an account?</Text>
                      ) : (
                        <Text color="#fff">Not a member yet?</Text>
                      )}
                      <Pressable onPress={() => setSignup(!signup)}>
                        <Text
                          mx={1}
                          fontFamily="Montserrat-Bold"
                          color="#BC082D">
                          {signup ? 'Sign In' : 'Sign Up'}
                        </Text>
                      </Pressable>
                    </Row>
                  </Center>
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
