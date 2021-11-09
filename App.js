import React, {Component} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './rootNavigator';
import {StatusBar} from 'native-base'
import {Provider} from "react-redux"
import {Store} from "./screens/Store/Store";

class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={Store}>
                <SafeAreaProvider>
                    <NativeBaseProvider>
                        {/* <StatusBar barStyle='auto' /> */}
                        <RootNavigator/>
                    </NativeBaseProvider>
                </SafeAreaProvider>
            </Provider>
        );
    }
}

export default App;
