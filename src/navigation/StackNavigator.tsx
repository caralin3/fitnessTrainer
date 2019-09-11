import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CalendarScreen, HomeScreen, ProfileScreen, ProgramScreen, RecordScreen, TimerScreen } from '../screens';
import { Colors, isAndroid } from '../constants';
import { Icon } from '../components';

const headerBackImage = () =>
  isAndroid ? (
    <Icon color="black" size={32} type="MI" name="arrow-back" />
  ) : (
    <Icon color="black" size={32} type="MI" name="keyboard-arrow-left" />
  );

const stackNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }: NavigationScreenProps) => ({
    headerBackTitleStyle: {
      color: 'black'
    },
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerBackImage,
    title: navigation.state.routeName === 'Home' ? 'Fitness Trainer' : navigation.state.routeName
  })
};

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackTitle: 'Browse'
      }
    },
    Program: ProgramScreen,
    Record: RecordScreen
  },
  stackNavigatorConfig
);

export const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen
  },
  stackNavigatorConfig
);

export const TimerStack = createStackNavigator(
  {
    Timer: TimerScreen
  },
  stackNavigatorConfig
);

export const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  stackNavigatorConfig
);
