import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './search';

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="SearchBase"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <SearchStack.Screen name="SearchBase" component={Search} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
