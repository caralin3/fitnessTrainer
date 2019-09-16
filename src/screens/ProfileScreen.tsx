import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../components';

interface ProfileScreenProps extends NavigationScreenProps {}

const DisconnectedProfileScreen: React.FC<ProfileScreenProps> = () => {
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
