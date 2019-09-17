import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../components';

interface AchievementsScreenProps extends NavigationScreenProps {}

const DisconnectedAchievementsScreen: React.FC<AchievementsScreenProps> = () => {
  return (
    <Layout>
      <Text>Achievements</Text>
    </Layout>
  );
};

export const AchievementsScreen = DisconnectedAchievementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});