import React from 'react'
import {Flex, Text, ScrollView, Image, Box, Row} from 'native-base'

const Anime = () => {
    return (
        <Flex my={5}>
          <Text m={4} fontSize={16} color="#fff" fontFamily="Montserrat-Bold">
            Anime
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
    )
}

export default Anime
