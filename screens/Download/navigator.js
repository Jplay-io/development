import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DownlaodBase from './index';

const DownloadStack = createStackNavigator();

const DownloadStackNavigator = () => {
  return (
    <DownloadStack.Navigator
      initialRouteName="Base"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <DownloadStack.Screen name="Base" component={DownlaodBase} />
    </DownloadStack.Navigator>
  );
};

export default DownloadStackNavigator;
