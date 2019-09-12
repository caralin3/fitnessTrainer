import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

export interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  const [started, setStarted] = React.useState(false);
  const [time, setTime] = React.useState(10);

  const select = (
    <View style={styles.container}>
      <Text>Select</Text>
    </View>
  );

  const countdown = (
    <View style={styles.container}>
      <CountDown
        size={20}
        digitStyle={{ backgroundColor: 'none' }}
        showSeparator
        until={time}
        running={started}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{ m: null, s: null }}
      />
      <Text onPress={() => setStarted(true)}>Start</Text>
      <Text onPress={() => setStarted(false)}>Pause</Text>
      <Text
        onPress={() => {
          setTime(0);
          setStarted(false);
        }}
      >
        Reset
      </Text>
    </View>
  );

  return <View style={styles.container}>{started ? countdown : countdown}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
