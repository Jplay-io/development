import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './screens/Home/navigator';
import DownloadStackNavigator from './screens/Download/navigator';

import Icon from 'react-native-vector-icons/Foundation';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5';


import GetStart from './screens/getStart';
import SignUp from './screens/signUp';
import Subscription from './screens/subscription';

import { Text } from 'native-base';
import Profile from './screens/profile';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenTabIcon(routeName, color, size) {
    switch (routeName) {
      case 'Home':
        return <Icon name="home" color={color} width={size} height={size} />;

      case 'Download':
        return (
          <Icon name="download" color={color} width={size} height={size} />
        );

      case 'Search':
        return <Icon1 name="search" color={color} width={size} height={size} />;

      case 'Profile':
        return <Icon3 name="user" color={color} width={size} height={size} />;

      default:
        return null;
    }
  }

const MainNavigator = () => {
  
  return (
      // <Text>Hello</Text>
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        gestureEnabled: true,
        tabBarIcon: ({color, size}) => ScreenTabIcon(route.name, color, size),
        cardStyle: {backgroundColor: '#FFF'},
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Download" component={DownloadStackNavigator} />
      {/* <Tab.Screen name="Search" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={HomeStackNavigator} /> */}
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Profile"
              screenOptions={{
                headerShown:false,
              }}>
              <Stack.Screen
                options={{
                    gestureEnabled:false,
                }}
                name="getStart"
                component={GetStart}
              />
              <Stack.Screen
                options={{
                    gestureEnabled:false,
                }}
                name="signUp"
                component={SignUp}
              />
              <Stack.Screen
                options={{
                    gestureEnabled:false,
                }}
                name="Subscription"
                component={Subscription}
              />
              <Stack.Screen
                options={{
                  gestureEnabled:false
                }}
                name="Home"
                component={HomeStackNavigator}
              />
               <Stack.Screen
                options={{
                  gestureEnabled:false
                }}
                name="Profile"
                component={Profile}
              />
            </Stack.Navigator>
          </NavigationContainer>
    )
}

export default RootNavigator
