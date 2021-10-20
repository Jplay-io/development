import React from 'react';
import {Flex, Text, ScrollView, Image, Box, Row} from 'native-base';
import Icon2 from 'react-native-vector-icons/Octicons';

const Trending = () => {
  return (
    <Flex my={5}>
      <Text m={4} fontSize={16} color="#fff" fontFamily="Montserrat-Bold">
        Trending
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Row mx={2}>
          <Box mx={2}>
            <Flex w={130}>
              <Image
                h={176}
                borderRadius={16}
                source={require('../../../assets/image11.png')}
                alt="image11"
              />
              <Text
                color="#fff"
                fontFamily="Montserrat-Regular"
                letterSpacing={-0.14}>
                attack on titans
              </Text>
              <Row flexWrap="wrap">
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Action
                  </Text>
                </Row>
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Scifi
                  </Text>
                </Row>
              </Row>
            </Flex>
          </Box>
          <Box mx={2}>
            <Flex w={130}>
              <Image
                h={176}
                borderRadius={16}
                source={require('../../../assets/image10.png')}
                alt="image11"
              />
              <Text
                color="#fff"
                fontFamily="Montserrat-Regular"
                letterSpacing={-0.14}>
                Gintama 2
              </Text>
              <Row flexWrap="wrap">
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Anime
                  </Text>
                </Row>
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Action
                  </Text>
                </Row>
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Drama
                  </Text>
                </Row>
              </Row>
            </Flex>
          </Box>
          <Box mx={2}>
            <Flex w={130}>
              <Image
                h={176}
                borderRadius={16}
                source={require('../../../assets/image8.png')}
                alt="image11"
              />
              <Text
                color="#fff"
                fontFamily="Montserrat-Regular"
                letterSpacing={-0.14}>
                Doraemon the …
              </Text>
              <Row flexWrap="wrap">
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Action
                  </Text>
                </Row>
                <Row alignItems="center">
                  <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                  <Text
                    mx={1}
                    color="#fff"
                    fontSize={8}
                    fontFamily="Montserrat-Regular">
                    Drama
                  </Text>
                </Row>
              </Row>
            </Flex>
          </Box>
        </Row>
      </ScrollView>
    </Flex>
  );
};

export default Trending;
