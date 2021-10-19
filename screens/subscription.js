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
  Checkbox,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Feather';

const Subscription = ({navigation}) => {
  const subscription = [
    {time: '1 Month', coin: '$10.49'},
    {time: '3 Month', coin: '$30.49'},
    {time: '1 Year', coin: '$50.49'},
  ];
  const [subs, setSubs] = useState({
    selected: 1,
    first: {active: true},
    second: {active: false},
    third: {active: false},
  });
  const ChangeHandler = e => {
    console.log(e);
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
            <Flex
              w={10}
              h={10}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              borderRadius={10}
              borderWidth={1}
              borderColor="#F1F1F1">
              <Icon2 name="times" size={20} color="#F1F1F1" />
            </Flex>
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
              <Icon name="lock-outline" size={25} color="#FFB465" />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                Unlock premium movies and dramas
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <Icon name="download" size={25} color="#039FC3" />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                Unlimited download
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <Icon1 name="hd" size={25} color="#875DE3" />
              <Text ml={3} color="white" fontFamily="Montserrat-Regular">
                Watch in HD up to 4K resolution
              </Text>
            </Row>
            <Row my={1} alignItems="center">
              <Icon2 name="ban" size={25} color="#FC6385" />
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
                    <Icon1 name="check-circle" size={30} color="#BC082D" />
                  ) : (
                    <Icon3 name="circle" size={30} color="#4E5175" />
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
                    <Icon1 name="check-circle" size={30} color="#BC082D" />
                  ) : (
                    <Icon3 name="circle" size={30} color="#4E5175" />
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
                    <Icon1 name="check-circle" size={30} color="#BC082D" />
                  ) : (
                    <Icon3 name="circle" size={30} color="#4E5175" />
                  )}
                </Row>
              </Box>
            </Pressable>
          </VStack>
          <Button
            onPress={() => navigation.navigate('Main')}
            mt={8}
            h={60}
            backgroundColor="#BC082D">
            Get Subscription
          </Button>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Subscription;
