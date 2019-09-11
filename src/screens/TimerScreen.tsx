import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../components';

interface TimerScreenProps extends NavigationScreenProps {}

const DisconnectedTimerScreen: React.FC<TimerScreenProps> = () => {
  return (
    <Layout>
      <Text>Timer</Text>
    </Layout>
  );
};

export const TimerScreen = DisconnectedTimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
