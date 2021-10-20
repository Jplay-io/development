import React from 'react';
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
  Center,
  View,
  Pressable,
} from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Mydownload = ({navigation}) => {
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
            mb={4}
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
              My Downloads
            </Text>
          </Flex>
        </Flex>
        <VStack
          display="flex"
          alignItems="center"
          m={4}
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="#f1f1f122"
          pb={5}
          direction="row">
          <Flex direction="row">
            <Image
              alt="not Found"
              borderRadius={10}
              style={{width: 110, height: 75}}
              source={require('../../assets/image10.png')}
            />
            <Flex ml={2} direction="column" justifyContent="space-evenly">
              <Text color="#fff" fontWeight="bold" fontSize={14}>
                Avengers
              </Text>
              <Text color="#ccc" fontWeight="medium" fontSize={12}>
                1:12:20 2.21 GB
              </Text>
              <Text color="#707070" fontWeight="medium" fontSize={12}>
                Download expires 8/31/2021
              </Text>
            </Flex>
          </Flex>
          <Icon name="play-circle" color="#fff" size={40} />
        </VStack>

        <VStack
          display="flex"
          alignItems="center"
          m={4}
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="#f1f1f122"
          pb={5}
          direction="row">
          <Flex direction="row">
            <Image
              alt="not Found"
              borderRadius={10}
              style={{width: 110, height: 75}}
              source={require('../../assets/image7.png')}
            />
            <Flex ml={2} direction="column" justifyContent="space-evenly">
              <Text color="#fff" fontWeight="bold" fontSize={14}>
                Guardians of the galaxy
              </Text>
              <Text color="#ccc" fontWeight="medium" fontSize={12}>
                1:12:20 2.21 GB
              </Text>
              <Text color="#707070" fontWeight="medium" fontSize={12}>
                Download expires 8/31/2021
              </Text>
            </Flex>
          </Flex>
          <Icon name="play-circle" color="#fff" size={40} />
        </VStack>
      </ScrollView>
    </Flex>
  );
};

export default Mydownload;
