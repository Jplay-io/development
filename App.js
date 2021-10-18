import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './rootNavigator';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <RootNavigator />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
