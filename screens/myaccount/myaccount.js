import React from 'react'
import {
    Flex,
    Text,
    Row,
    ScrollView,
  } from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
const MyAccount = () => {
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
                <Text color="#ffff"  style={{marginHorizontal:100}} textAlign="center"  fontSize={18} fontWeight="bold">My Account</Text>
            </Flex>
             </Flex>
              
             <Flex 
                 bg="#121922"
                 marginLeft={"16px"}
                 borderRadius={7}
                 marginRight={"16px"}
                 marginTop={"16px"} 
                 display="flex"
                 alignItems="center"
                 justifyContent="space-between"
                 direction="row"
                 paddingX={4}
                 paddingY={4}
              >

               <Row alignItems="center">
               <Icon2 name="user" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                Change Personal Information
              </Text>
               </Row>
               <Icon2 name='angle-right' size={18} color="#f1f1f1" />

              </Flex>
              <Flex 
                 bg="#121922"
                 marginLeft={"16px"}
                 borderRadius={7}
                 marginRight={"16px"}
                 marginTop={"16px"} 
                 display="flex"
                 alignItems="center"
                 justifyContent="space-between"
                 direction="row"
                 paddingX={4}
                 paddingY={4}
              >

               <Row alignItems="center">
               <Icon2 name="user" size={20} color="#fff" />
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                  Change Password   
              </Text>
               </Row>
               <Icon2 name='angle-right' size={18} color="#f1f1f1" />

              </Flex>
        </ScrollView>
      </Flex>
    )
}

export default MyAccount