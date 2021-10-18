import React, {useState} from 'react';
import {
  Text,
  Flex,
  Input,
  Column,
  Row,
  Pressable,
  Box,
  ScrollView,
} from 'native-base';
import Icon from 'react-native-vector-icons/Fontisto';
import DefaultScreen from './components/defaultScreen';
import ByDate from './components/byDate';
import ByActor from './components/byActor';
import Similar from './components/similar';
import Result from './components/result';

const Search = ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <Flex flex={1} safeArea bg="#151F28">
      <Column flex={1}>
        <Flex bg="#f1f1f122" p={4} justifyContent="center">
          <Row my={1} alignItems="center">
            <Input
              w={name.length > 0 ? '80%' : '100%'}
              bg="#151F28"
              value={name}
              onChangeText={e => setName(e)}
              height={45}
              borderRadius={8}
              color="#fff"
              fontWeight="semibold"
              borderWidth={0}
              InputLeftElement={
                <Text ml={4} fontSize={22} color="gray.400">
                  <Icon name="search" size={20} />
                </Text>
              }
              placeholder="Search for movies, series or docmentaries"
            />
            {name.length > 0 ? (
              <Pressable ml={2} onPress={() => setName('')}>
                <Text fontWeight="bold" color="#fff">
                  Cancel
                </Text>
              </Pressable>
            ) : (
              false
            )}
          </Row>
        </Flex>
        <Flex flex={5}>
          <ScrollView>
            {name.length === 0 ? (
              <DefaultScreen />
            ) : (
              <>
                <Result name={name} />
                <ByDate name={name} />
                <ByActor name={name} />
                <Similar name={name} />
              </>
            )}
          </ScrollView>
        </Flex>
      </Column>
    </Flex>
  );
};

export default Search;
