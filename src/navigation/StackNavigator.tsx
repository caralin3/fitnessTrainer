import { NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CalendarScreen, HomeScreen, ProfileScreen, ProgramScreen, RecordScreen, TimerScreen } from '../screens';

const stackNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }: NavigationScreenProps) => ({
    title: navigation.state.routeName,
    headerStyle: {
      backgroundColor: '#ffc957'
    }
  })
};

export const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
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
