import React, {useState} from 'react';
import {
  Flex,
  Text,
  Button,
  Row,
  Image,
  VStack,
  Box,
  Column,
  ScrollView,
  Pressable,
} from 'native-base';
import {SvgXml} from 'react-native-svg';
import {circle, check, key, download, hd, noAds, exit} from '../assets/icons';

const Subscription = ({navigation}) => {
  const [subs, setSubs] = useState({
    selected: 1,
    first: {active: true},
    second: {active: false},
    third: {active: false},
  });
  const ChangeHandler = e => {
    switch (e) {
      case 'first': {
        setSubs({
          selected: 1,
          first: {active: true},
          second: {active: false},
          third: {active: false},
        });
        break;
      }
      case 'second': {
        setSubs({
          selected: 2,
          first: {active: false},
          second: {active: true},
          third: {active: false},
        });
        break;
      }
      case 'third': {
        setSubs({
          selected: 3,
          first: {active: false},
          second: {active: false},
          third: {active: true},
        });
        break;
      }
      default: {
        return subs;
      }
    }
  };
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex p={6} justifyContent="space-evenly">
          <Flex alignItems="flex-end">
            <SvgXml xml={exit} />
          </Flex>
          <Flex>
            <Text
              color="white"
              fontSize={24}
              fontFamily="Montserrat-Regular"
              letterSpacing={-0.24}>
              Enjoy the best films
            </Text>
            <Row alignItems="center" mb={4}>
              <Text
                color="white"
                fontSize={24}
                fontFamily="Montserrat-Regular"
                letterSpacing={-0.24}>
                and dramas from
              </Text>
              <Image
                h={9}
                w={110}
                alt="j_play"
                source={require('../assets/j_play.png')}
              />
            </Row>
            <Row my={1} alignItems="center">
              <SvgXml xml={key} />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                Unlock premium movies and dramas
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <SvgXml xml={download} />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                Unlimited download
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <SvgXml xml={hd} />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                Watch in HD up to 4K resolution
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <SvgXml xml={noAds} />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                No ads while watching
              </Text>
            </Row>
          </Flex>
          <VStack space={4} mt={4}>
            <Pressable onPress={() => ChangeHandler('first')}>
              <Box
                bg="#121922"
                borderRadius={20}
                h={20}
                borderWidth={subs.first.active ? 1 : 0}
                borderColor="#BC082D">
                <Row
                  justifyContent="space-between"
                  h="100%"
                  px={5}
                  alignItems="center">
                  <Column>
                    <Text color="white">1 Month</Text>
                    <Text color="#7A809D">$10.49</Text>
                  </Column>

                  {subs.first.active ? (
                    <SvgXml xml={check} width={30} height={30} />
                  ) : (
                    <SvgXml xml={circle} width={30} height={30} />
                  )}
                </Row>
              </Box>
            </Pressable>
            <Pressable onPress={() => ChangeHandler('second')}>
              <Box
                bg="#121922"
                borderRadius={20}
                h={20}
                borderWidth={subs.second.active ? 1 : 0}
                borderColor="#BC082D">
                <Row
                  justifyContent="space-between"
                  h="100%"
                  px={5}
                  alignItems="center">
                  <Column>
                    <Text color="white">3 Month</Text>
                    <Text color="#7A809D">$30.49</Text>
                  </Column>
                  {subs.second.active ? (
                    <SvgXml xml={check} width={30} height={30} />
                  ) : (
                    <SvgXml xml={circle} width={30} height={30} />
                  )}
                </Row>
              </Box>
            </Pressable>
            <Pressable onPress={() => ChangeHandler('third')}>
              <Box
                bg="#121922"
                borderRadius={20}
                h={20}
                borderWidth={subs.third.active ? 1 : 0}
                borderColor="#BC082D">
                <Row
                  justifyContent="space-between"
                  h="100%"
                  px={5}
                  alignItems="center">
                  <Column>
                    <Text color="white">1 Year</Text>
                    <Text color="#7A809D">$50.49</Text>
                  </Column>
                  {subs.third.active ? (
                    <SvgXml xml={check} width={30} height={30} />
                  ) : (
                    <SvgXml xml={circle} width={30} height={30} />
                  )}
                </Row>
              </Box>
            </Pressable>
          </VStack>
          <Button
            onPress={() => navigation.navigate('Main')}
            mt={8}
            h={60}
            borderRadius={8}
            backgroundColor="#BC082D">
            Get Subscription
          </Button>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Subscription;
