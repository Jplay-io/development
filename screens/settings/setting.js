import React, { useState } from 'react'
import {
    Flex,
    Text,
    Row,
    ScrollView,
    Switch,
  } from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                <Text color="#ffff"  style={{marginHorizontal:100}} textAlign="center"  fontSize={18} fontWeight="bold">Settings</Text>
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
                
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                     Download on wifi only
              </Text>
               </Row>
               <Switch
                trackColor={{ false: "#767577", true: "red" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
      />
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
                
              <Text ml={3} fontWeight="bold" fontSize={18} color="white">
                      Video quality
              </Text>
               </Row>
                   <Text color="#FFFFFF" fontSize={14}>High</Text>
              </Flex>
        </ScrollView>
      </Flex>
    )
}

export default Settings