import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Timer as RNTimer } from 'react-native-stopwatch-timer';
import { Colors } from '../constants';
import { Button } from './Button';
import { Row } from './Layout';

export interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  const [running, setRunning] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [totalDuration, setTotalDuration] = React.useState(6000);

  const handleStart = () => {
    setRunning(true);
    setStart(true);
    setReset(false);
  };

  const handlePause = () => {
    setStart(!start);
    setReset(false);
  };

  const handleCancel = () => {
    setRunning(false);
    setStart(false);
    setReset(true);
  };

  const handleFinish = () => {
    handleCancel();
  };

  const select = (
    <View style={styles.container}>
      <Text>Select</Text>
    </View>
  );

  const countdown = (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([styles.timer, running ? styles.circle : undefined])}>
        <RNTimer
          totalDuration={totalDuration}
          start={start}
          reset={reset}
          options={options}
          handleFinish={handleFinish}
        />
      </View>
      {!running ? (
        <Button size="lg" style={{ width: 125 }} bgColor={Colors.primary} text="Start" onPress={handleStart} />
      ) : (
        <Row style={{ width: '100%' }} align="center" justify="space-around">
          <Button
            size="lg"
            style={{ width: 125 }}
            bgColor={!start ? Colors.primary : Colors.accent}
            color={!start ? 'black' : 'white'}
            text={!start ? 'Resume' : 'Pause'}
            onPress={handlePause}
          />
          <Button size="lg" style={{ width: 125 }} color="white" bgColor="black" text="Cancel" onPress={handleCancel} />
        </Row>
      )}
    </View>
  );

  return <View style={styles.container}>{start ? countdown : countdown}</View>;
};

const options = {
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    width: '100%'
  },
  timer: {
    height: 300,
    justifyContent: 'center',
    width: 300
  },
  circle: {
    borderColor: Colors.primary,
    borderRadius: 300 / 2,
    borderWidth: 3
  }
});
