import React from 'react';
import {Row, Box, Flex, Text, Card} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
LinearGradient;
import {ImageBackground, Dimensions} from 'react-native';

const DefaultScreen = () => {
  const width = Dimensions.get('window').width;
  const elements = [
    {name: 'Anime', image: require('../../../assets/anime.png')},
    {name: 'Comedy', image: require('../../../assets/comedy.png')},
    {name: 'Thriller', image: require('../../../assets/thriller.png')},
    {name: 'Action', image: require('../../../assets/action.png')},
    {name: 'Family', image: require('../../../assets/comedy.png')},
    {name: 'Documentary', image: require('../../../assets/documentary.png')},
  ];

  return (
    <Flex m={4}>
      <Row justifyContent="space-between" flexWrap="wrap">
        {elements.map((el, index) => {
          return (
            <Flex key={index} my={2}>
              <ImageBackground
                imageStyle={{borderRadius: 16}}
                resizeMode="cover"
                source={el.image}>
                <Card
                  rounded={16}
                  p={0}
                  justifyContent="flex-end"
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
                        m={2}
                        fontSize={12}
                        fontWeight="semibold"
                        color="#fff">
                        {el.name}
                      </Text>
                    </Flex>
                  </LinearGradient>
                </Card>
              </ImageBackground>
            </Flex>
          );
        })}
      </Row>
    </Flex>
  );
};

export default DefaultScreen;
