import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { Layout, ProgramTileList, Tile } from '../components';
import { Colors, Dimensions } from '../constants';
import { categories, programs } from '../data';
import { NavigationScreenProps } from 'react-navigation';

interface TabViewProps {
  key: string;
  title: string;
}

interface HomeScreenProps extends NavigationScreenProps {}

const DisconnectedHomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [routes] = React.useState<TabViewProps[]>([
    {
      key: 'level',
      title: 'By Level'
    },
    {
      key: 'category',
      title: 'By Category'
    }
  ]);

  const LevelScene = () => (
    <View style={styles.content}>
      <Text style={styles.sectionHeader}>Beginner</Text>
      <ProgramTileList
        programs={programs.filter(p => p.level === 'beginner')}
        onPress={slug => navigation.navigate('Program', { slug })}
      />
      <Text style={styles.sectionHeader}>Intermediate</Text>
      <ProgramTileList
        programs={programs.filter(p => p.level === 'intermediate')}
        onPress={slug => navigation.navigate('Program', { slug })}
      />
      <Text style={styles.sectionHeader}>Advanced</Text>
      <ProgramTileList
        programs={programs.filter(p => p.level === 'advanced')}
        onPress={slug => navigation.navigate('Program', { slug })}
      />
    </View>
  );

  const CategoryScene = () => (
    <View style={styles.content}>
      <View style={styles.grid}>
        {categories.map(categ => (
          <Tile key={categ.title} imgSrc={categ.imgSrc} title={categ.title} onPress={() => null} />
        ))}
      </View>
    </View>
  );

  return (
    <Layout>
      <ScrollView>
        <Image resizeMode="cover" source={{ uri: 'https://picsum.photos/600/200' }} style={styles.feature} />
        <Text style={styles.heading}>Browse Programs</Text>
        <TabView
          swipeEnabled={false}
          navigationState={{
            routes,
            index: tabIndex
          }}
          renderScene={SceneMap({
            level: LevelScene,
            category: CategoryScene
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
      </ScrollView>
    </Layout>
  );
};

export const HomeScreen = DisconnectedHomeScreen;

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
  feature: {
    height: 200
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  grid: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  sectionHeader: {
    fontSize: 16,
    paddingVertical: 10
  },
  program: {
    borderRadius: 3,
    height: 200,
    marginRight: 10,
    width: 150
  }
});
