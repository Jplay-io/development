import React from 'react'
import { Flex, Text, ScrollView, Image, Box, Row } from 'native-base'
import { FlatList } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
const Action = ({ data }) => {
  const List = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <Box mx={2}>
          <Flex>
            <Image
              w={130}
              h={176}
              borderRadius={16}
              source={{ uri: item._data.image[0] }}
              alt="image11"
            />
          </Flex>
          <Text color="#fff">{item?._data?.title}</Text>
        </Box>
      </TouchableOpacity>
    )
  }
  return (
    <Flex my={5}>
      <Text m={4} fontSize={16} color="#fff" fontFamily="Montserrat-Bold">
        Action
      </Text>
      <Row mx={2}>
        <FlatList showHorizontalIndicator={false} horizontal data={data} keyExtractor={({ id }) => id} renderItem={({ item, index }) => {
          return <List item={item} index={index} />
        }} />
      </Row>
    </Flex>
  )
}

export default Action
