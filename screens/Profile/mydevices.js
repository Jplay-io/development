import React from 'react';
import {Flex, Text, Row, ScrollView, Button, Pressable} from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
const MyDevices = ({navigation}) => {
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
              My Devices
            </Text>
          </Flex>

          <Text color="#fff" mx={4} fontSize={18} fontWeight="bold">
            Added Devices
          </Text>
          <Flex
            bg="#121922"
            mx={3}
            mt={5}
            padding="5"
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Flex>
              <Text color="#fff" fontSize={15} fontWeight="bold">
                Salem Macbook
              </Text>
              <Text color="#ccc" fontSize={14} fontWeight="bold">
                Date added: 13 June 2021
              </Text>
            </Flex>
            <Flex direction="row">
              <Icon1 name="edit" size={25} color="#ccc" />
              <Icon1
                name="delete"
                size={25}
                style={{marginLeft: 12}}
                color="#ccc"
              />
            </Flex>
          </Flex>
        </Flex>
      </ScrollView>
      <Button mx={3} h={60} mb={4} backgroundColor="#BC082D">
        Add New Device
      </Button>
    </Flex>
  );
};

export default MyDevices;
