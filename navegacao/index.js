/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Nav from './src/routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Nav);
