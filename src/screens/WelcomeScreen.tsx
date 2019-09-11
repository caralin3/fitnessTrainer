import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationComponent, NavigationScreenProps } from 'react-navigation';
import { Button, Layout } from '../components';
import { Colors, Dimensions } from '../constants';

const DisconnectedWelcomeScreen: NavigationComponent = ({ navigation }: NavigationScreenProps) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Fitness Trainer</Text>
        <Image resizeMode="contain" source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
        <Button
          onPress={() => navigation.navigate('Home')}
          bgColor="tomato"
          color="white"
          size="lg"
          text="Start Training"
        />
      </View>
    </Layout>
  );
};

export const WelcomeScreen = DisconnectedWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: Dimensions.height * 0.1
  },
  heading: {
    color: 'tomato',
    fontSize: 32,
    fontWeight: 'bold'
  },
  image: {
    height: 300,
    width: 200
  }
});
