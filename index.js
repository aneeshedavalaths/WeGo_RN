/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SplashScreen);
