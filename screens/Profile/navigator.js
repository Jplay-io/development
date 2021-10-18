import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileBase from './index';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Base"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <ProfileStack.Screen name="Base" component={ProfileBase} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
