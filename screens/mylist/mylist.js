import React from 'react'
import {
    Flex,
    Text,
    Row,
    Image,
    ScrollView,
    Center,
  } from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';

const MyList = () => {
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
           <Flex    justifyContent="space-evenly">
            <Flex 
             bg="#f1f1f122" 
             py={4}
             display="flex"
             alignItems="center"
             direction="row"
             pl={4}
             mb={4}

             alignItems="center">
              <Flex
                 px={3}
                 py={1}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                borderRadius={10}
                borderWidth={1}

                borderColor="#F1F1F1">
                <Icon2 name="angle-left"   size={20} color="#F1F1F1" />
              </Flex>
                <Text color="#ffff" ml={32}  textAlign="center"  fontSize={18} fontWeight="bold">My List</Text>
            </Flex>
             </Flex>
              <Text mx={4} fontSize={20} fontWeight="bold" color="#fff">Friends Recommendation</Text>
              <ScrollView  showsHorizontalScrollIndicator={false} mt={5} mx={1} horizontal={true} >
                     <Flex mx={3} direction="column" alignItems="center">
                          <Image
                           source={require('../../assets/image10.png')}
                           alt="not Found"
                           width={105}
                           height={156}
                           borderRadius={10}
                          />
                          <Text color="#fff" fontSize={16}>Movie Name</Text>
                     </Flex>
                     <Flex mx={3} direction="column" alignItems="center">
                          <Image
                           source={require('../../assets/image5.png')}
                           alt="not Found"
                           width={105}
                           height={156}
                           borderRadius={10}
                          />
                          <Text color="#fff" fontSize={16}>Movie Name</Text>
                     </Flex>
                     <Flex mx={3} direction="column" alignItems="center">
                          <Image
                           source={require('../../assets/image10.png')}
                           alt="not Found"
                           width={105}
                           height={156}
                           borderRadius={10}
                          />
                          <Text color="#fff" fontSize={16}>Movie Name</Text>
                     </Flex>
                     <Flex mx={3} direction="column" alignItems="center">
                          <Image
                           alt="not Found"
                           source={require('../../assets/image1.png')}
                           width={105}
                           height={156}
                           borderRadius={10}
                          />
                          <Text color="#fff" fontSize={16}>Movie Name</Text>
                     </Flex>
              </ScrollView>
                     <Text mx={4} mt={4} fontSize={20} fontWeight="bold" color="#fff">My List</Text>
                      <Flex m={4}>
            <Row justifyContent="space-between" flexWrap="wrap">
            {mylists.map((el, index) => {
            return (
            <Flex key={index} my={2}>
              
                    <Center    mx={1} direction="column" alignItems="center">
                          <Image
                           alt="not Found"
                           source={el.image}
                           width={105}
                           height={156}
                           borderRadius={10}
                          />
                          <Text color="#fff" fontSize={16}>Movie Name</Text>
                     </Center> 
                
                 
               
            </Flex>
          );
        })}
      </Row>
    </Flex>
        </ScrollView>
      </Flex>
    )
}

export default MyList