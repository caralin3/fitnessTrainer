import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '../components';

// interface CalendarScreenProps {}

const DisconnectedCalendarScreen: React.FC = () => {
  return (
    <Layout>
      <Text>Calendar</Text>
    </Layout>
  );
};

export const CalendarScreen = DisconnectedCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
