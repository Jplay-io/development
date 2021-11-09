import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './screens/Home/navigator';
import DownloadStackNavigator from './screens/Download/navigator';
import SearchStackNavigator from './screens/Search/navigator';
import ProfileStackNavigator from './screens/Profile/navigator';

import Icon from 'react-native-vector-icons/Foundation';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage"
import GetStart from './screens/getStart';
import SignUp from './screens/signUp';
import Subscription from './screens/subscription';
import Video from './screens/Home/video';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenTabIcon(routeName, color) {
    switch (routeName) {
        case 'Home':
            return <Icon name="home" color={color} size={20}/>;

        case 'Download':
            return <Icon name="download" color={color} size={20}/>;

        case 'Search':
            return <Icon1 name="search" color={color} size={20}/>;

        case 'Profile':
            return <Icon3 name="user" color={color} size={20}/>;

        default:
            return null;
    }
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="getStart"
                         screenOptions={{
                             headerShown: false,
                         }}>
            <Stack.Screen
                options={{
                    gestureEnabled: false,
                }}
                name="getStart"
                component={GetStart}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: false,
                }}
                name="signUp"
                component={SignUp}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: false,
                }}
                name="Subscription"
                component={Subscription}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: false,
                }}
                name="Main"
                component={MainNavigator}
            />
        </Stack.Navigator>
    )
}
const MainNavigator = () => {
    // getTabBarVisibility = route => {
    //     const routeName = route.state
    //         ? route.state.routes[route.state.index].name
    //         : '';
    //
    //     if (routeName === 'Video') {
    //         return 'none';
    //     }
    //
    //     return true;
    // };
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarInactiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#111113',
                tabBarInactiveBackgroundColor: '#111113',
                tabBarActiveTintColor: '#BC082D',
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabel: () => {
                    return null;
                },
                tabBarIcon: ({color}) => ScreenTabIcon(route.name, color),
            })}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                // options={({route}) => ({tabBarStyle: {display: 'none'}})}
            />
            <Tab.Screen name="Download" component={DownloadStackNavigator}/>
            <Tab.Screen name="Search" component={SearchStackNavigator}/>
            <Tab.Screen name="Profile" component={ProfileStackNavigator}/>
        </Tab.Navigator>
    );
};

const RootNavigator = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        AsyncStorage.getItem("user", (err, data) => {
            if (err) {
                throw  err
            }
            setUser(data)
        })
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="getStart"
                screenOptions={{
                    headerShown: false,
                }}>

                {user !== null ? (<Stack.Screen
                    options={{
                        gestureEnabled: false,
                        headerShown: false,
                    }}
                    name="Main"
                    component={MainNavigator}
                />) : (<Stack.Screen
                    options={{
                        gestureEnabled: false,
                        headerShown: false,
                    }}
                    name="AuthNavigator"
                    component={AuthNavigator}
                />)}
                <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen name="Video" component={Video}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
