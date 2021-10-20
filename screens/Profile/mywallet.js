import React from 'react';
import {Flex, Text, Row, View, ScrollView, Pressable} from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MyWallet = ({navigation}) => {
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex justifyContent="space-evenly">
          <Flex
            bg="#f1f1f122"
            py={4}
            display="flex"
            alignItems="center"
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
            <Text
              color="#ffff"
              style={{marginHorizontal: 100}}
              textAlign="center"
              fontSize={18}
              fontWeight="bold">
              My Wallet
            </Text>
          </Flex>
        </Flex>

        <Flex
          bg="#24673EC0"
          marginLeft={'16px'}
          borderRadius={7}
          marginRight={'16px'}
          marginTop={'40px'}>
          <Flex
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            padding={3}>
            <View
              background="#F3A609"
              width={'35px'}
              height={'35px'}
              borderRadius={50}
              mr={2}
              alignItems="center"
              justifyContent="center">
              <Text color="#fff" fontSize={24} fontWeight="bold">
                J
              </Text>
            </View>
            <Text color="#fff" fontSize="16" fontWeight="bold">
              Salem Ahmed
            </Text>
          </Flex>
          <Flex
            display="flex"
            direction="column"
            alignItems="center"
            justifyContent="center">
            <Text color="#fff" fontWeight="bold" fontSize={54}>
              32.00
            </Text>
            <Flex
              display="flex"
              direction="row"
              alignItems="flex-start"
              mb={-3}
              ml={2}>
              <Icon2 name="arrow-up" color="#29FD62" size={20} />
              <Text color="#fff" color="#29FD62" fontSize={18}>
                0.1%
              </Text>
            </Flex>
          </Flex>
          <Flex my={5} direction="row" justifyContent="center">
            <Icon2 name="share-alt" size={24} color="#ccc" />
            <Text fontSize={16} color="#ccc" ml={2}>
              Share with friends and earn. Share now
            </Text>
          </Flex>
        </Flex>
        <Text color="#fff" fontSize={20} fontWeight="bold" mt={10} m={4}>
          Activity
        </Text>
        <Flex
          bg="#121922"
          mx={3}
          mt={5}
          padding="5"
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon name="arrow-bottom-left" size={32} color="#8AF09D" />
          <Flex>
            <Text color="#fff" fontSize={15} fontWeight="bold">
              Friend Referral
            </Text>
            <Text color="#ccc" fontSize={14} fontWeight="bold">
              From Ahmed
            </Text>
            <Text color="#ccc" mt={2} fontSize={14} fontWeight="bold">
              Date added: 13 June 2021
            </Text>
          </Flex>
          <Text color="#8AF09D" fontSize={20} fontWeight="bold">
            +3.00 J
          </Text>
        </Flex>
        <Flex
          bg="#121922"
          mx={3}
          mt={5}
          padding="5"
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon name="arrow-top-right" size={32} color="#FF073A" />
          <Flex>
            <Text color="#fff" fontSize={15} fontWeight="bold">
              Friend Referral
            </Text>
            <Text color="#ccc" fontSize={14} fontWeight="bold">
              From Ahmed
            </Text>
            <Text color="#ccc" mt={2} fontSize={14} fontWeight="bold">
              Date added: 13 June 2021
            </Text>
          </Flex>
          <Text color="#FF073A" fontSize={20} fontWeight="bold">
            +3.00 J
          </Text>
        </Flex>
        <Flex
          bg="#121922"
          mx={3}
          mt={5}
          padding="5"
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon name="arrow-bottom-left" size={32} color="#8AF09D" />
          <Flex>
            <Text color="#fff" fontSize={15} fontWeight="bold">
              Friend Referral
            </Text>
            <Text color="#ccc" fontSize={14} fontWeight="bold">
              From Ahmed
            </Text>
            <Text color="#ccc" mt={2} fontSize={14} fontWeight="bold">
              Date added: 13 June 2021
            </Text>
          </Flex>
          <Text color="#8AF09D" fontSize={20} fontWeight="bold">
            +3.00 J
          </Text>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default MyWallet;
