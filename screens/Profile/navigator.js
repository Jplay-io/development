import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileBase from './index';
import MyWallet from './mywallet';
import MySubscription from './subscription';
import MyList from './mylist';
import Mydownload from './downloads';
import MyAccount from './myaccount';
import MyDevices from './mydevices';
import Settings from './setting';

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
      <ProfileStack.Screen name="Wallet" component={MyWallet} />
      <ProfileStack.Screen name="Subscription" component={MySubscription} />
      <ProfileStack.Screen name="MyList" component={MyList} />
      <ProfileStack.Screen name="Downloads" component={Mydownload} />      
      <ProfileStack.Screen name="Account" component={MyAccount} />      
      <ProfileStack.Screen name="Devices" component={MyDevices} />      
      <ProfileStack.Screen name="Settings" component={Settings} />      
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
