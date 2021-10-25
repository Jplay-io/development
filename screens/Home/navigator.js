import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './index';
import Details from './components/details';
import Video from './video';

const ProfileStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' }
      }}
    >
      <ProfileStack.Screen name="HomePage" component={Home} />
      <ProfileStack.Screen name="Details" component={Details} />
      {/* <ProfileStack.Screen name="Video" component={Video} /> */}

    </ProfileStack.Navigator>
  );
};

export default HomeStackNavigator;
