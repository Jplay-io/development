import React from 'react';
import {Flex, Text, Box, ScrollView, Image, Row} from 'native-base';

const Result = ({name}) => {
  return (
    <Flex my={4}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Row mx={2}>
          <Box mx={2}>
            <Flex>
              <Image
                w={130}
                h={176}
                borderRadius={16}
                source={require('../../../assets/image10.png')}
                alt="image11"
              />
            </Flex>
            <Text color="#fff">{name}</Text>
          </Box>
        </Row>
      </ScrollView>
    </Flex>
  );
};

export default Result;
