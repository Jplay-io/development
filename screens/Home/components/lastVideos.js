import React from 'react';
import {Flex, Text, ScrollView, Row, Box, Image, Progress} from 'native-base';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const LastVideos = () => {
  return (
    <Flex mt={2} flex={5}>
      <Text m={4} color="#fff" fontSize={16} fontWeight="medium">
        Continue watching for{' '}
        <Text fontWeight="bold" fontSize={16} color="#BC002D">
          Salem
        </Text>
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Row mx={2}>
          <Box w={250} mx={2} bg="#373F47" borderRadius={16}>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              source={require('../../../assets/image10.png')}
              resizeMode="cover">
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#00000000', '#151F28']}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                }}>
                <Flex h={150} justifyContent="flex-end">
                  <Row
                    mx={4}
                    alignItems="center"
                    justifyContent="space-between">
                    <Icon size={27} color="#fff" name="play-circle" />

                    <Text color="#fff" fontSize={10}>
                      1:05:44
                    </Text>
                  </Row>
                  <Progress
                    size="xs"
                    colorScheme="secondary"
                    value={45}
                    my={2}
                    mx="4"
                  />
                </Flex>
              </LinearGradient>
            </ImageBackground>
            <Text m={3} color="#fff">
              Season 1-Avengers
            </Text>
          </Box>
          <Box w={250} mx={2} bg="#373F47" borderRadius={16}>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              source={require('../../../assets/image8.png')}
              resizeMode="cover">
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#00000000', '#151F28']}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                }}>
                <Flex h={150} justifyContent="flex-end">
                  <Row
                    mx={4}
                    alignItems="center"
                    justifyContent="space-between">
                    <Icon size={27} color="#fff" name="play-circle" />

                    <Text color="#fff" fontSize={10}>
                      1:05:44
                    </Text>
                  </Row>
                  <Progress
                    size="xs"
                    colorScheme="secondary"
                    value={45}
                    my={2}
                    mx="4"
                  />
                </Flex>
              </LinearGradient>
            </ImageBackground>
            <Text m={3} color="#fff">
              Season 1-Avengers
            </Text>
          </Box>
        </Row>
      </ScrollView>
    </Flex>
  );
};

export default LastVideos;
