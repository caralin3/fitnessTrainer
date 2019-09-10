import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '../components';

// interface ProfileScreenProps {}

const DisconnectedProfileScreen: React.FC = () => {
  return (
    <Layout>
      <Text>Profile</Text>
    </Layout>
  );
};

export const ProfileScreen = DisconnectedProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
