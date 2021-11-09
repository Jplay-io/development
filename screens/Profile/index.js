import React from 'react';
import {Text, Flex, Image, ScrollView, View, Row, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileBase = ({navigation}) => {
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex
          pt={16}
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center">
          <Flex display="flex" direction="column" alignItems="center" mr={15}>
            <Image
              borderRadius={50}
              alt="profile_1"
              w={60}
              borderWidth={2}
              borderColor="#BC082D"
              h={60}
              source={require('../../assets/avatar1.png')}
            />
            <Text color="#f1f1f1">Selem</Text>
          </Flex>
          <Flex display="flex" direction="column" ml={15} alignItems="center">
            <View
              borderRadius={50}
              w={60}
              borderStyle="dashed"
              borderWidth={4}
              borderColor="#BFBFBF"
              h={60}
              alignItems="center"
              justifyContent="center">
              <Icon name="plus" size={28} color="#BFBFBF" />
            </View>
            <Text color="#BFBFBF">Add</Text>
          </Flex>
        </Flex>
        <Flex
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
          mt={6}>
          <Icon name="edit" size={15} color="#BFBFBF" />
          <Text color="#BFBFBF" fontSize={15}>
            Manage Profile
          </Text>
        </Flex>
        <Pressable onPress={() => navigation.navigate('Wallet')}>
          <Flex
            bg="#24673EC0"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'40px'}
            position={'relative'}>
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
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              padding={3}>
              <Text color="#fff" color="#fff" fontSize={42}>
                32.00
              </Text>
              <Flex
                display="flex"
                direction="row"
                alignItems="flex-start"
                mb={-3}
                ml={2}>
                <Icon name="arrow-up" color="#29FD62" size={20} />
                <Text color="#fff" color="#29FD62" fontSize={15}>
                  0.1%
                </Text>
              </Flex>
            </Flex>
            <Icon2
              name="chevron-right"
              color="#fff"
              size={45}
              style={{position: 'absolute', right: 8, top: 50}}
            />
          </Flex>
        </Pressable>
        <Text color="#fff" ml={4} mt={5} fontSize={19} fontWeight="bold">
          Profile
        </Text>
        <Pressable onPress={() => navigation.navigate('Subscription')}>
          <Flex
            bg="#121922"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'16px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            paddingX={3}
            paddingY={3}>
            <Row alignItems="center">
              <Icon2 name="cash-multiple" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                My Subscription
              </Text>
            </Row>
            <Text color="#fff">Monthly</Text>
          </Flex>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MyList')}>
          <Flex
            bg="#121922"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'10px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            paddingX={3}
            paddingY={3}>
            <Row alignItems="center">
              {/* <Icon name="list" size={20} color="#fff" /> */}
              <Icon1 name="list-alt" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                My list
              </Text>
            </Row>
            <Icon name="angle-right" size={18} color="#f1f1f1" />
          </Flex>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Downloads')}>
          <Flex
            bg="#121922"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'10px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            paddingX={3}
            paddingY={3}>
            <Row alignItems="center">
              <Icon2 name="download" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                Download
              </Text>
            </Row>
            <Icon name="angle-right" size={18} color="#f1f1f1" />
          </Flex>
        </Pressable>

        {/* ----------- */}

        <Text color="#fff" ml={4} mt={5} fontSize={19} fontWeight="bold">
          General
        </Text>
        <Pressable onPress={() => navigation.navigate('Account')}>
          <Flex
            bg="#121922"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'16px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            paddingX={3}
            paddingY={3}>
            <Row alignItems="center">
              <Icon name="user" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                My account
              </Text>
            </Row>
            <Icon name="angle-right" size={18} color="#f1f1f1" />
          </Flex>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Devices')}>
          <Flex
            bg="#121922"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'10px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            paddingX={3}
            paddingY={3}>
            <Row alignItems="center">
              <Icon1 name="devices" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                Device management
              </Text>
            </Row>
            <Icon name="angle-right" size={18} color="#f1f1f1" />
          </Flex>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Settings')}>
          <Flex
            bg="#121922"
            marginLeft={'16px'}
            borderRadius={7}
            marginRight={'16px'}
            marginTop={'10px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            paddingX={3}
            paddingY={3}>
            <Row alignItems="center">
              <Icon name="cog" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                Settings
              </Text>
            </Row>
            <Icon name="angle-right" size={18} color="#f1f1f1" />
          </Flex>
        </Pressable>
        <Flex
          bg="#121922"
          marginLeft={'16px'}
          borderRadius={7}
          marginRight={'16px'}
          marginTop={'10px'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          paddingX={3}
          paddingY={3}>
          <Row alignItems="center">
            <Icon name="comment" size={20} color="#fff" />
            <Text ml={3} fontWeight="bold" fontSize={18} color="white">
              Cantact Us
            </Text>
          </Row>
          <Icon name="angle-right" size={18} color="#f1f1f1" />
        </Flex>
        <Flex
          bg="#121922"
          marginLeft={'16px'}
          borderRadius={7}
          marginRight={'16px'}
          marginTop={'10px'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          paddingX={3}
          paddingY={3}
          marginBottom={50}>
          <Row alignItems="center">
            <Icon2 name="logout" size={20} color="#fff" />
            <Text ml={3} fontWeight="bold" fontSize={18} color="white">
              Logout
            </Text>
          </Row>
          <Icon name="angle-right" size={18} color="#f1f1f1" />
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default ProfileBase;
