/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import MydatePicker from './components/MyDatePicker';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Register);
