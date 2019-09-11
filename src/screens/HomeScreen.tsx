import React from 'react';
import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { Layout, ProgramTile, Tile } from '../components';
import { Colors, Dimensions } from '../constants';

// interface HomeScreenProps {}

const DisconnectedHomeScreen: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [routes] = React.useState<Array<{ key: string; title: string }>>([
    {
      key: 'level',
      title: 'By Level'
    },
    {
      key: 'category',
      title: 'By Category'
    }
  ]);

  const categories: Array<{
    imgSrc: ImageSourcePropType;
    link: string;
    title: string;
  }> = [
    {
      imgSrc: require('../assets/images/running_4.jpeg'),
      link: 'cardio',
      title: 'Cardio'
    },
    {
      imgSrc: require('../assets/images/strength.jpeg'),
      link: 'strength',
      title: 'Strength'
    },
    {
      imgSrc: require('../assets/images/plank.jpeg'),
      link: 'yoga',
      title: 'Yoga'
    },
    {
      imgSrc: require('../assets/images/yoga_2.jpeg'),
      link: 'flexibility',
      title: 'Flexibility'
    }
  ];

  const programs: Array<{
    category?: 'cardio' | 'strength' | 'yoga' | 'flexibility';
    duration: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    link: string;
    imgSrc: ImageSourcePropType;
    title: string;
  }> = [
    {
      duration: '4 weeks',
      level: 'beginner',
      imgSrc: require('../assets/images/running.jpeg'),
      link: 'mile',
      title: 'Run 1 mile'
    },
    {
      duration: '2 weeks',
      level: 'beginner',
      imgSrc: require('../assets/images/cycling.jpeg'),
      link: 'mile',
      title: 'Ride Bicycle for 3 miles'
    },
    {
      duration: '30 mins',
      level: 'beginner',
      imgSrc: require('../assets/images/crunches.jpeg'),
      link: 'mile',
      title: 'Crunch Blaster for Ab Strength'
    },
    {
      duration: '1 week',
      level: 'intermediate',
      imgSrc: require('../assets/images/rope.jpeg'),
      link: 'mile',
      title: 'Strength Builder'
    },
    {
      duration: '3 weeks',
      level: 'intermediate',
      imgSrc: require('../assets/images/running_2.jpeg'),
      link: 'mile',
      title: 'Run 3 miles'
    },
    {
      duration: '1 hour',
      level: 'intermediate',
      imgSrc: require('../assets/images/medicine_ball.jpeg'),
      link: 'mile',
      title: 'Lift 50lbs'
    },
    {
      duration: '3 hours',
      level: 'advanced',
      imgSrc: require('../assets/images/yoga.jpeg'),
      link: 'mile',
      title: 'Intense Yoga'
    },
    {
      duration: '2 weeks',
      level: 'advanced',
      imgSrc: require('../assets/images/cycling_2.jpeg'),
      link: 'mile',
      title: 'Cycle for 15 miles'
    },
    {
      duration: '30 mins',
      level: 'advanced',
      imgSrc: require('../assets/images/running_3.jpeg'),
      link: 'mile',
      title: '100yd Sprint Intervals'
    }
  ];

  const LevelScene = () => (
    <View style={styles.content}>
      <Text style={styles.sectionHeader}>Beginner</Text>
      <View style={styles.row}>
        {programs
          .filter(p => p.level === 'beginner')
          .map(p => (
            <ProgramTile key={p.title} duration={p.duration} imgSrc={p.imgSrc} onPress={() => null} title={p.title} />
          ))}
      </View>
      <Text style={styles.sectionHeader}>Intermediate</Text>
      <View style={styles.row}>
        {programs
          .filter(p => p.level === 'intermediate')
          .map(p => (
            <ProgramTile key={p.title} duration={p.duration} imgSrc={p.imgSrc} onPress={() => null} title={p.title} />
          ))}
      </View>
      <Text style={styles.sectionHeader}>Advanced</Text>
      <View style={styles.row}>
        {programs
          .filter(p => p.level === 'advanced')
          .map(p => (
            <ProgramTile key={p.title} duration={p.duration} imgSrc={p.imgSrc} onPress={() => null} title={p.title} />
          ))}
      </View>
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
