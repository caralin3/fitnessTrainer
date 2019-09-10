import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { WelcomeScreen } from '../screens';
import TabNavigator from './TabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Welcome: WelcomeScreen,
      Main: TabNavigator
    },
    {
      initialRouteName: 'Main'
      // initialRouteName: 'Welcome'
    }
  )
);
