import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '../components';

// interface ProgramScreenProps {}

const DisconnectedProgramScreen: React.FC = () => {
  return (
    <Layout>
      <Text>Program</Text>
    </Layout>
  );
};

export const ProgramScreen = DisconnectedProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
