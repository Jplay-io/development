import React, {useEffect, useCallback, useState, Component} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, Flex, NativeBaseProvider, View} from 'native-base';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetStart from './screens/getStart';
import SignUp from './screens/signUp';
import Subscription from './screens/subscription';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Subscription"
              screenOptions={{
                header: () => null,
              }}>
              <Stack.Screen
                options={{
                  title: 'Get Start',
                }}
                name="getStart"
                component={GetStart}
              />
              <Stack.Screen
                options={{
                  title: 'Sign Up',
                }}
                name="signUp"
                component={SignUp}
              />
              <Stack.Screen
                options={{
                  title: 'Subscription',
                }}
                name="Subscription"
                component={Subscription}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
