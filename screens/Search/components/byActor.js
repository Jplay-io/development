import React from 'react';
import {Text, Flex, ScrollView, Row, Box, Image} from 'native-base';


const ByActor = ({name}) => {
  
  return (
    <Flex my={4}>
      <Text m={4} fontSize={16} color="#fff">
        Actor name:{' '}
        <Text fontSize={16} fontWeight="bold" color="#BC082D">
          {name}
        </Text>
      </Text>
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
            <Text color="#fff">Gintama 2</Text>
          </Box>
          <Box mx={2}>
            <Flex>
              <Image
                w={130}
                h={176}
                borderRadius={16}
                source={require('../../../assets/image5.png')}
                alt="image11"
              />
            </Flex>
            <Text color="#fff">Mirai of the Future</Text>
          </Box>
          <Box mx={2}>
            <Flex>
              <Image
                w={130}
                h={176}
                borderRadius={16}
                source={require('../../../assets/image4.png')}
                alt="image11"
              />
            </Flex>
            <Text color="#fff">Spirited Away</Text>
          </Box>
        </Row>
      </ScrollView>
    </Flex>
  );
};

export default ByActor;
