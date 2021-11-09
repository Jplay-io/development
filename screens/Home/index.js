import React, { useEffect, useState } from 'react';
import {
    Text,
    Flex,
    Image,
    Row,
    Column,
    ScrollView,
    Center,
    View,
} from 'native-base';
import { ImageBackground, Pressable, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Trending from './components/trend';
import Anime from './components/anime';
import Action from './components/action';
import MyList from './components/myList';
import Top from './components/top';
import LastVideos from './components/lastVideos';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"
const Home = () => {
    const navigation = useNavigation();
    const [error, setError] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, []);
    const getData = async () => {
        try {
            const top = await firestore().collection("Movies").orderBy("view_count", "desc").limit(1).get()
            const movies = await firestore().collection("Movies").where("tags", "array-contains-any", ["Action", "Comedy"]).get()
            setData({ top: top.docs, movies: movies.docs })
        } catch (e) {
            setError(e)
        }
    }
    if (data.length == 0) {
        return (
            <View flex={10} backgroundColor={"#151F28"} alignItems={"center"} justifyItems={"center"} >
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Flex safeArea flex={1} bg="#151F28">
                <ScrollView flex={1}>
                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: data?.top[0]?._data?.image[0] }}>
                        <Flex
                            justifyContent="space-between"
                            h={400}
                            //   bg="lightBlue.100"
                            flex={1}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                colors={['#151F28', '#00000000', '#151F28']}
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                }}>
                                <Flex px={4} flex={1} justifyContent="center">
                                    <Image
                                        w={110}
                                        h={10}
                                        source={require('../../assets/j_play.png')}
                                        alt="j_play"
                                    />
                                </Flex>
                                <Flex flex={3} justifyContent="flex-end">
                                    <Center>
                                        <Text
                                            letterSpacing={-0.28}
                                            color="#fff"
                                            fontSize={28}
                                            fontFamily="Montserrat-Bold">
                                            {data?.top[0]?._data?.title}
                                        </Text>
                                    </Center>
                                    <Row p={6} alignItems="center" justifyContent="space-between">
                                        <Row
                                            w={75}
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Pressable onPress={() => navigation.navigate('Video')}>
                                                <Icon1 size={40} color="#fff" name="play-circle" />
                                            </Pressable>
                                            <Column alignItems="center">
                                                <Icon color="#fff" size={16} name="plus" />
                                                <Text color="#fff" fontSize={10}>
                                                    My list
                                                </Text>
                                            </Column>
                                        </Row>

                                        <Column>
                                            <Text fontSize={13} color="#fff">
                                                Friends Watching
                                            </Text>
                                            <Flex>
                                                <Row alignItems="center">
                                                    <Image
                                                        alt="user1"
                                                        rounded={50}
                                                        zIndex={1}
                                                        size={8}
                                                        source={require('../../assets/avatar1.png')}
                                                    />

                                                    <Image
                                                        zIndex={2}
                                                        rounded={50}
                                                        alt="user2"
                                                        style={{ transform: [{ translateX: -15 }] }}
                                                        size={8}
                                                        source={require('../../assets/avatar2.png')}
                                                    />

                                                    <Image
                                                        zIndex={3}
                                                        rounded={50}
                                                        style={{ transform: [{ translateX: -30 }] }}
                                                        alt="user3"
                                                        size={8}
                                                        source={require('../../assets/avatar1.png')}
                                                    />
                                                    <Text
                                                        style={{ transform: [{ translateX: -20 }] }}
                                                        color="#fff">
                                                        +13
                                                    </Text>
                                                </Row>
                                            </Flex>
                                        </Column>
                                    </Row>
                                </Flex>
                            </LinearGradient>
                        </Flex>
                    </ImageBackground>
                    <LastVideos navigation={navigation} />
                    <Trending data={data.movies} />
                    <Anime data={data.movies} />
                    <Action data={data.movies} />
                    <MyList data={data.movies} />
                    <Top data={data.movies} />
                </ScrollView>
            </Flex>
        </SafeAreaView >
    );
};

export default Home;
