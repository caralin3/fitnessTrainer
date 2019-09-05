import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RecordScreen } from './src/screens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <RecordScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
});
