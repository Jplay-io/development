import React from 'react';
import {
  Flex,
  Text,
  Row,
  Image,
  ScrollView,
  Center,
  Pressable,
} from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';

const MyList = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const mylists = [
    {name: 'Movie Name', image: require('../../assets/image1.png')},
    {name: 'Movie Name', image: require('../../assets/image3.png')},
    {name: 'Movie Name', image: require('../../assets/image1.png')},
    {name: 'Movie Name', image: require('../../assets/image4.png')},
    {name: 'Movie Name', image: require('../../assets/image5.png')},
    {name: 'Movie Name', image: require('../../assets/image11.png')},
  ];
  return (
    <Flex safeArea flex={1} bg="#151F28">
      <ScrollView>
        <Flex>
          <Row
            bg="#f1f1f122"
            py={4}
            alignItems="center"
            px={4}
            // justifyContent='center'
            mb={4}>
            <Pressable onPress={() => navigation.goBack()}>
              <Flex
                w={10}
                h={10}
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
              textAlign="center"
              fontSize={16}
              position="absolute"
              left="50%"
              style={{transform: [{translateX: -16}]}}
              fontFamily="Montserrat-Bold">
              My List
            </Text>
          </Row>
        </Flex>
        <Flex>
          <Text mx={4} fontSize={16} fontFamily="Montserrat-Bold" color="#fff">
            Friends Recommendation
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            mt={5}
            horizontal={true}>
            <Row mx={2}>
              <Flex
                mx={2}
                w={(width - 64) / 3}
                direction="column"
                alignItems="center">
                <Image
                  source={require('../../assets/image10.png')}
                  alt="not Found"
                  width="full"
                  height={156}
                  borderRadius={10}
                />
                <Text color="#fff" fontSize={12} fontFamily="Montserrat-Medium">
                  Movie Name
                </Text>
              </Flex>
              <Flex
                mx={2}
                w={(width - 64) / 3}
                direction="column"
                alignItems="center">
                <Image
                  source={require('../../assets/image5.png')}
                  alt="not Found"
                  
                  height={156}
                  borderRadius={10}
                />
                <Text color="#fff" fontSize={12} fontFamily="Montserrat-Medium">
                  Movie Name
                </Text>
              </Flex>
              <Flex
                mx={2}
                w={(width - 64) / 3}
                direction="column"
                alignItems="center">
                <Image
                  source={require('../../assets/image8.png')}
                  alt="not Found"
                  width="full"
                  height={156}
                  borderRadius={10}
                />
                <Text color="#fff" fontSize={12} fontFamily="Montserrat-Medium">
                  Movie Name
                </Text>
              </Flex>
              <Flex
                mx={2}
                w={(width - 64) / 3}
                direction="column"
                alignItems="center">
                <Image
                  alt="not Found"
                  source={require('../../assets/image1.png')}
                  width="full"
                  height={156}
                  borderRadius={10}
                />
                <Text color="#fff" fontSize={12} fontFamily="Montserrat-Medium">
                  Movie Name
                </Text>
              </Flex>
            </Row>
          </ScrollView>
        </Flex>
        <Text
          mx={4}
          mt={10}
          fontSize={16}
          fontFamily="Montserrat-Bold"
          color="#fff">
          My List
        </Text>
        <Flex>
          <Row m={2} justifyContent="space-between" flexWrap="wrap">
            {mylists.map((el, index) => {
              return (
                <Flex key={index} w={(width - 64) / 3} m={2}>
                  <Center alignItems="center">
                    <Image
                      alt="not Found"
                      source={el.image}
                      width="full"
                      height={156}
                      borderRadius={10}
                    />
                    <Text
                      color="#fff"
                      fontSize={12}
                      fontFamily="Montserrat-Medium">
                      Movie Name
                    </Text>
                  </Center>
                </Flex>
              );
            })}
          </Row>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default MyList;
