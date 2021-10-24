import React, { useState } from 'react';
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
import {circle, check} from '../../assets/icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const MySubscription = ({navigation}) => {
  
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
        <Flex justifyContent="space-evenly">
          <Flex
            bg="#f1f1f122"
            py={4}
            display="flex"
            justifyContent="flex-start"
            direction="row"
            pl={4}
            alignItems="center">
            <Pressable onPress={() => navigation.goBack()}>
              <Flex
                px={3}
                py={1}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                borderRadius={10}
                borderWidth={1}
                borderColor="#F1F1F1">
                <Icon2 name="angle-left" size={20} color="#F1F1F1" />
              </Flex>
            </Pressable>
            <Text color="#ffff" ml={20} fontSize={16} fontWeight="bold">
              My Subscription
            </Text>
          </Flex>
          <Flex p={6}>
            <Text color="white" fontSize={24}>
              Enjoy the best films
            </Text>
            <Row alignItems="center" mb={4}>
              <Text color="white" fontSize={24}>
                and dramas from
              </Text>
              <Image
                h={9}
                w={110}
                alt="j_play"
                source={require('../../assets/j_play.png')}
              />
            </Row>
            <Row my={1} alignItems="center">
              <Icon name="lock-outline" size={25} color="#FFB465" />
              <Text ml={3} color="white">
                Unlock premium movies and dramas
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <Icon name="download" size={25} color="#039FC3" />
              <Text ml={3} color="white">
                Unlimited download
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <Icon1 name="hd" size={25} color="#875DE3" />
              <Text ml={3} color="white">
                Watch in HD up to 4K resolution
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <Icon2 name="ban" size={25} color="#FC6385" />
              <Text ml={3} color="white">
                No ads while watching
              </Text>
            </Row>
          </Flex>
          <VStack space={4} mt={4} mx={4}>
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
            mx={6}
            onPress={() => navigation.navigate('Main')}
            mt={8}
            borderRadius={8}
            h={60}
            backgroundColor="#BC082D">
            Get Subscription
          </Button>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default MySubscription;
