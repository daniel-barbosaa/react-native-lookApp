/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Home from './src/pages/Home/home';
// import SingUp from './src/pages/Singup';
// import SingIn from './src/pages/Singin';
import Feed from './src/pages/Feed';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feed);
