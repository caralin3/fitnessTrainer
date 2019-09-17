import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../components';

interface AchievementsScreenProps extends NavigationScreenProps {}

const DisconnectedAchievementsScreen: React.FC<AchievementsScreenProps> = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, paddingHorizontal: 10, textAlign: 'center' }}>Screen is under construction</Text>
      </View>
    </Layout>
  );
};

export const AchievementsScreen = DisconnectedAchievementsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
