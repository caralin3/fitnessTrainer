import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { Layout, Tile } from '../components';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { ScrollView } from 'react-native-gesture-handler';
import { IconType } from '../components/Icon';

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
    icon: {
      name: string;
      type: IconType;
    };
    link: string;
    title: string;
  }> = [
    {
      icon: {
        name: 'run-fast',
        type: 'MCI'
      },
      link: 'endurance',
      title: 'Endurance'
    },
    {
      icon: {
        name: 'weight',
        type: 'MCI'
      },
      link: 'strength',
      title: 'Strength'
    },
    {
      icon: {
        name: 'scale-balance',
        type: 'MCI'
      },
      link: 'balance',
      title: 'Balance'
    },
    {
      icon: {
        name: 'zodiac-aries',
        type: 'MCI'
      },
      link: 'flexibility',
      title: 'Flexibility'
    }
  ];

  const LevelScene = () => (
    <View style={styles.content}>
      <Text style={styles.sectionHeader}>Beginner</Text>
      <View style={styles.row}>
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
      </View>
      <Text style={styles.sectionHeader}>Intermediate</Text>
      <View style={styles.row}>
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
      </View>
      <Text style={styles.sectionHeader}>Experienced</Text>
      <View style={styles.row}>
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/150/200' }} style={styles.program} />
      </View>
    </View>
  );

  const CategoryScene = () => (
    <View style={styles.content}>
      <View style={styles.grid}>
        {categories.map(categ => (
          <Tile key={categ.title} icon={categ.icon} title={categ.title} onPress={() => null} />
          // <Image
          //   key={categ.title}
          //   resizeMode="contain"
          //   source={{ uri: 'https://picsum.photos/150' }}
          //   style={styles.category}
          // />
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
  },
  category: {
    borderRadius: 3,
    height: 150,
    marginBottom: 20,
    width: 150
  }
});
