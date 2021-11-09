import React from 'react';
import {Flex, Text, Image, VStack, ScrollView} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DownloadBase = ({navigation}) => {
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex bg="#f1f1f122" py={4} alignItems="center">
          <Text color="#ffff" fontSize={16} fontFamily="Montserrat-Bold">
            My Downloads
          </Text>
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

export default DownloadBase;
