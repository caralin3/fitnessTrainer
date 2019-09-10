import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '../components';
// interface TimerScreenProps {}

const DisconnectedTimerScreen: React.FC = () => {
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
