import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '../components';

// interface HomeScreenProps {}

const DisconnectedHomeScreen: React.FC = () => {
  return (
    <Layout>
      <Text>Home</Text>
    </Layout>
  );
};

export const HomeScreen = DisconnectedHomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  }
});
