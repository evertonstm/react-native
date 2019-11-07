import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';

const main = createStackNavigator({Main});
const AppContainer = createAppContainer(main);

export default AppContainer;
