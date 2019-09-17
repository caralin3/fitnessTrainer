import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon, IconType } from '../components/Icon';
import { AchievementsStack, HomeStack, ProfileStack, TimerStack } from './StackNavigator';
import { Colors } from '../constants';

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Timer: TimerStack,
    Achievements: AchievementsStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }: NavigationScreenProps) => ({
      tabBarIcon: ({ tintColor }: { tintColor: string }) => {
        const { routeName } = navigation.state;
        let name = 'run';
        let type: IconType = 'MCI';
        if (routeName === 'Home') {
          name = 'run';
        } else if (routeName === 'Achievements') {
          name = 'trophy';
        } else if (routeName === 'Timer') {
          name = 'timer';
        } else if (routeName === 'Profile') {
          type = 'MI';
          name = 'person';
        }
        return <Icon type={type} name={name} size={32} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.accent,
      inactiveTintColor: 'black',
      showLabel: false,
      style: {
        backgroundColor: Colors.primary
      }
    }
  } as any // tslint:disable-line no-any
);
