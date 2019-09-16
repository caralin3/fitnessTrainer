import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../components';

interface CalendarScreenProps extends NavigationScreenProps {}

const DisconnectedCalendarScreen: React.FC<CalendarScreenProps> = () => {
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
