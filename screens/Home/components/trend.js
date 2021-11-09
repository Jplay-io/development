import React from 'react';
import { FlatList } from "react-native"
import { Flex, Text, ScrollView, Image, Box, Row } from 'native-base';
import Icon2 from 'react-native-vector-icons/Octicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Trending = ({ data }) => {
  const navigation = useNavigation()
  const List = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate('Details', { movies: item })
      }} >
        <Box mx={2}>
          <Flex w={130}>
            <Image
              h={176}
              borderRadius={16}
              source={{ uri: item._data.image[0] }}
              alt="image11"
            />
            <Text
              color="#fff"
              fontFamily="Montserrat-Regular"
              letterSpacing={-0.14}>
              {item?._data?.title}
            </Text>
            <Row flexWrap="wrap">
              {item._data.tags.slice(0, 3).map((val, index) => (<Row alignItems="center">
                <Icon2 name="primitive-dot" color="#BC002D" size={10} />
                <Text
                  mx={1}
                  color="#fff"
                  fontSize={8}
                  fontFamily="Montserrat-Regular">
                  {val}
                </Text>
              </Row>))}
            </Row>
          </Flex>
        </Box>
      </TouchableOpacity>
    )
  }
  return (
    <Flex my={5}>
      <Text m={4} fontSize={16} color="#fff" fontFamily="Montserrat-Bold">
        Trending
      </Text>
      <Row mx={2}>
        <FlatList showHorizontalIndicator={false} horizontal data={data} keyExtractor={({ id }) => id} renderItem={({ item, index }) => {
          return <List item={item} index={index} />
        }} />
      </Row>
    </Flex>
  );
};

export default Trending;
