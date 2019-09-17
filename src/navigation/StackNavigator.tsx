import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  AchievementsScreen,
  HomeScreen,
  ProfileScreen,
  ProgramScreen,
  ProgramMenuScreen,
  TimerScreen,
  WorkoutScreen
} from '../screens';
import { Colors, isAndroid } from '../constants';
import { Icon } from '../components';
import { ProgramStep } from '../data';

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
    Program: {
      screen: ProgramScreen,
      navigationOptions: {
        headerBackTitle: 'Details'
      }
    },
    ProgramMenu: {
      screen: ProgramMenuScreen,
      navigationOptions: ({ navigation }: NavigationScreenProps) => ({
        headerBackTitle: 'Choose',
        title: navigation.getParam('title')
      })
    },
    Workout: {
      screen: WorkoutScreen,
      navigationOptions: ({ navigation }: NavigationScreenProps) => ({
        title: navigation.getParam('title')
      })
    }
  },
  stackNavigatorConfig
);

export const AchievementsStack = createStackNavigator(
  {
    Achievements: AchievementsScreen
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
