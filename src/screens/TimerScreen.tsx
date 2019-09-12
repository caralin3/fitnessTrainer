import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { NavigationScreenProps } from 'react-navigation';
import { Layout, StopWatch, Timer } from '../components';
import { Colors, Dimensions } from '../constants';

interface TabViewProps {
  key: string;
  title: string;
}

interface TimerScreenProps extends NavigationScreenProps {}

const DisconnectedTimerScreen: React.FC<TimerScreenProps> = ({ navigation }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [routes] = React.useState<TabViewProps[]>([
    {
      key: 'stopWatch',
      title: 'Stop Watch'
    },
    {
      key: 'timer',
      title: 'Timer'
    }
  ]);

  return (
    <Layout>
      <TabView
        navigationState={{
          routes,
          index: tabIndex
        }}
        renderScene={SceneMap({
          stopWatch: StopWatch,
          timer: Timer
        })}
        onIndexChange={i => setTabIndex(i)}
        initialLayout={{ width: Dimensions.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            labelStyle={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }}
            indicatorStyle={{ backgroundColor: Colors.primary }}
            style={{ backgroundColor: 'white' }}
          />
        )}
      />
    </Layout>
  );
};

export const TimerScreen = DisconnectedTimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  sectionHeader: {
    fontSize: 16,
    paddingVertical: 10
  }
});
