import React from 'react';
import {Text, Flex, Image, Row, Column, ScrollView, Center} from 'native-base';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Trending from './components/trend';
import Anime from './components/anime';
import Action from './components/action';
import MyList from './components/myList';
import Top from './components/top';
import LastVideos from './components/lastVideos';

const Home = ({navigation}) => {
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView flex={1}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/image1.png')}>
          <Flex
            justifyContent="space-between"
            h={400}
            //   bg="lightBlue.100"
            flex={1}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
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
                  <Text fontWeight="bold" color="#fff" fontSize={28}>
                    Under the Open Sky
                  </Text>
                </Center>
                <Row p={6} alignItems="center" justifyContent="space-between">
                  <Row
                    w={75}
                    justifyContent="space-between"
                    alignItems="center">
                    <Icon1 size={40} color="#fff" name="play-circle" />
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
                          style={{transform: [{translateX: -15}]}}
                          size={8}
                          source={require('../../assets/avatar2.png')}
                        />

                        <Image
                          zIndex={3}
                          rounded={50}
                          style={{transform: [{translateX: -30}]}}
                          alt="user3"
                          size={8}
                          source={require('../../assets/avatar1.png')}
                        />
                        <Text
                          style={{transform: [{translateX: -20}]}}
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
        <LastVideos />
        <Trending />
        <Anime />
        <Action />
        <MyList />
        <Top />
      </ScrollView>
    </Flex>
  );
};

export default Home;
