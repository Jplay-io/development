import React, {useState} from 'react';
import {Text, Flex, Input, Column, Row, Pressable, Box} from 'native-base';
import {Dimensions, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
  const [name, setName] = useState('');

  const width = Dimensions.get('window').width;

  return (
    <Flex flex={1} safeArea bg="#151F28">
      <Column flex={1}>
        <Flex flex={1} bg="#f1f1f122" px={4} justifyContent="center">
          <Row my={2} alignItems="center">
            <Input
              w={name.length > 0 ? '80%' : '100%'}
              bg="#151F28"
              value={name}
              onChangeText={e => setName(e)}
              height={45}
              borderRadius={8}
              color="#fff"
              fontWeight="semibold"
              borderWidth={0}
              InputLeftElement={
                <Text ml={4} fontSize={22} color="gray.400">
                  <Icon name="search" size={20} />
                </Text>
              }
              placeholder="Search for movies, series or docmentaries"
            />
            {name.length > 0 ? (
              <Pressable ml={2} onPress={() => setName('')}>
                <Text fontWeight="bold" color="#fff">
                  Cancel
                </Text>
              </Pressable>
            ) : (
              false
            )}
          </Row>
        </Flex>
        <Flex p={4} flex={5}>
          <Row justifyContent="space-between">
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              resizeMode="cover"
              source={require('../../assets/anime.png')}>
              <Box justifyContent="flex-end" w={width / 3.5} h={width / 3.5}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 1}}
                  colors={['#00000000', '#000000']}
                  style={{
                    flex: 1,
                  }}>
                  <Flex flex={1} justifyContent="flex-end">
                    <Text
                      m={3}
                      fontSize={12}
                      fontWeight="semibold"
                      color="#fff">
                      Anime
                    </Text>
                  </Flex>
                </LinearGradient>
              </Box>
            </ImageBackground>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              resizeMode="cover"
              source={require('../../assets/comedy.png')}>
              <Box
                justifyContent="flex-end"
                borderRadius={16}
                w={width / 3.5}
                h={width / 3.5}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 1}}
                  colors={['#00000000', '#000000']}
                  style={{
                    flex: 1,
                  }}>
                  <Flex flex={1} justifyContent="flex-end">
                    <Text
                      m={3}
                      fontSize={12}
                      fontWeight="semibold"
                      color="#fff">
                      Comedy
                    </Text>
                  </Flex>
                </LinearGradient>
              </Box>
            </ImageBackground>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              resizeMode="cover"
              source={require('../../assets/thriller.png')}>
              <Box
                justifyContent="flex-end"
                borderRadius={16}
                w={width / 3.5}
                h={width / 3.5}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 1}}
                  colors={['#00000000', '#000000']}
                  style={{
                    flex: 1,
                  }}>
                  <Flex flex={1} justifyContent="flex-end">
                    <Text
                      m={3}
                      fontSize={12}
                      fontWeight="semibold"
                      color="#fff">
                      Thriller{' '}
                    </Text>
                  </Flex>
                </LinearGradient>
              </Box>
            </ImageBackground>
          </Row>
          <Row my={2} justifyContent="space-between">
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              resizeMode="cover"
              source={require('../../assets/action.png')}>
              <Box
                justifyContent="flex-end"
                borderRadius={16}
                w={width / 3.5}
                h={width / 3.5}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 1}}
                  colors={['#00000000', '#000000']}
                  style={{
                    flex: 1,
                  }}>
                  <Flex borderRadius={16} flex={1} justifyContent="flex-end">
                    <Text
                      m={3}
                      fontSize={12}
                      fontWeight="semibold"
                      color="#fff">
                      Action
                    </Text>
                  </Flex>
                </LinearGradient>
              </Box>
            </ImageBackground>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              resizeMode="cover"
              source={require('../../assets/comedy.png')}>
              <Box
                justifyContent="flex-end"
                borderRadius={16}
                w={width / 3.5}
                h={width / 3.5}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 1}}
                  colors={['#00000000', '#000000']}
                  style={{
                    flex: 1,
                  }}>
                  <Flex flex={1} justifyContent="flex-end">
                    <Text
                      m={3}
                      fontSize={12}
                      fontWeight="semibold"
                      color="#fff">
                      Family
                    </Text>
                  </Flex>
                </LinearGradient>
              </Box>
            </ImageBackground>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              resizeMode="cover"
              source={require('../../assets/documentary.png')}>
              <Box
                justifyContent="flex-end"
                borderRadius={16}
                w={width / 3.5}
                h={width / 3.5}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 1}}
                  colors={['#00000000', '#000000']}
                  style={{
                    flex: 1,
                  }}>
                  <Flex flex={1} justifyContent="flex-end">
                    <Text
                      m={3}
                      fontSize={12}
                      fontWeight="semibold"
                      color="#fff">
                      Documentary
                    </Text>
                  </Flex>
                </LinearGradient>
              </Box>
            </ImageBackground>
          </Row>
        </Flex>
      </Column>
    </Flex>
  );
};

export default Search;
