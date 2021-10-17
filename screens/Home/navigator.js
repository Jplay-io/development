import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import {Text} from 'native-base'


const ProfileStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' }
      }}
    >
      <ProfileStack.Screen name="HomePage" component={Home} />

    </ProfileStack.Navigator>
  );
};

export default HomeStackNavigator;
