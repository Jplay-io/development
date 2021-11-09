import React, { useState } from 'react';
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
import { Alert } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import Background from '../components/background';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import { Dimensions, Pressable } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { USER_ERROR, USER_GET, USER_LOADING } from './Store/types/Type';
import AsyncStorage from "@react-native-async-storage/async-storage"
import firestore from "@react-native-firebase/firestore"
GoogleSignin.configure({ webClientId: "288411737101-muq7kmpi6qtthke0ldaoab1be76mg0ae.apps.googleusercontent.com" })

const height = Dimensions.get('screen').height;

const SignUp = () => {
    const navigation = useNavigation()
    const [signup, setSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const submitHandler = async () => {
        dispatch({ type: USER_LOADING, loading: true })
        if (signup) {
            try {
                const { user } = await auth().createUserWithEmailAndPassword(email, password)
                dispatch({ type: USER_GET, user: user, loading: false })
                firestore().collection("users").add({ email: user.email, user_id: user.uid, })
                AsyncStorage.setItem("user", JSON.stringify(user), (err) => {
                    if (err) {
                        throw err
                    }
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Subscription' }]
                    })
                })
            } catch (error) {
                dispatch({ type: USER_ERROR, error: error, loading: false })
                Alert.alert(JSON.stringify(error))
            }
        } else {
            try {
                const { user } = await auth().signInWithEmailAndPassword(email, password)
                dispatch({ type: USER_GET, user: user, loading: false })
                AsyncStorage.setItem("user", JSON.stringify(user), (err) => {
                    if (err) {
                        throw err
                    }
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Subscription' }]
                    })
                })
            } catch (error) {
                dispatch({ type: USER_ERROR, error: error, loading: false })
                Alert.alert(JSON.stringify(error))
            }
        }
    };
    const _signWithGoogle = async () => {
        dispatch({ type: USER_LOADING, loading: true })
        try {
            const { idToken, user } = await GoogleSignin.signIn()
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)
            auth().signInWithCredential(googleCredential)
            const user_check = await firestore().collection("users").where("email", "==", user.email).get()
            if (user_check.empty) {
                firestore().collection("users").add({ email: user.email, user_id: user.id, avatar: { url: user.photo } })
            }
            dispatch({ type: USER_GET, user: user, loading: false })
            AsyncStorage.setItem("user", JSON.stringify(user), (err) => {
                if (err) {
                    throw err
                }
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Subscription' }]
                })
            })

        } catch (error) {

            dispatch({ type: USER_ERROR, error: error, loading: false })
            Alert.alert(JSON.stringify(error))
        }
    }

    return (
        <Flex flex={1} safeArea>
            <ScrollView keyboardShouldPersistTaps="always">
                <Flex flex={1}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
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
                                        onPress={_signWithGoogle}
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
