import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Row } from './Layout';
import { Button } from './Button';
import { Colors } from '../constants';

export interface StopWatchProps {}

export const StopWatch: React.FC<StopWatchProps> = () => {
  const [running, setRunning] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [laps, setLaps] = React.useState<string[]>([]);
  const [reset, setReset] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState('');
  // const [timerStart, setTimerStart] = React.useState(false);
  // const [timerReset, setTimerReset] = React.useState(false);
  // const [totalDuration, setTotalDuration] = React.useState(60000);

  // const toggleTimer = () => {
  //   setTimerStart(!start);
  //   setTimerReset(false);
  // };

  // const resetTimer = () => {
  //   setTimerStart(false);
  //   setTimerReset(true);
  // };

  const handleStart = () => {
    setRunning(true);
    setStart(true);
    setReset(false);
  };

  const handleStop = () => {
    setStart(!start);
    setReset(false);
  };

  const handleReset = () => {
    setRunning(false);
    setStart(false);
    setReset(true);
    setLaps([]);
  };

  const handleLap = () => setLaps([...laps, currentTime]);

  return (
    <View style={styles.container}>
      <Stopwatch laps msecs start={start} reset={reset} options={options} getTime={time => setCurrentTime(time)} />
      {!running ? (
        <Button size="lg" style={{ width: 125 }} bgColor={Colors.primary} text="Start" onPress={handleStart} />
      ) : (
        <Row style={{ width: '100%' }} align="center" justify="space-around">
          <Button
            size="lg"
            style={{ width: 125 }}
            bgColor={!start ? Colors.primary : Colors.accent}
            color={!start ? 'black' : 'white'}
            text={!start ? 'Resume' : 'Stop'}
            onPress={handleStop}
          />
          {!start ? (
            <TouchableOpacity onPress={handleReset}>
              <Text style={{ fontSize: 24 }}>Reset</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleLap}>
              <Text style={{ fontSize: 24 }}>Lap</Text>
            </TouchableOpacity>
          )}
        </Row>
      )}
      {running && laps.length > 0 && laps.map((time, index) => <Text key={index}>{time}</Text>)}
      {/* <Timer
        totalDuration={totalDuration}
        msecs
        start={timerStart}
        reset={timerReset}
        options={options}
        handleFinish={() => null}
      />
      <TouchableOpacity onPress={toggleTimer}>
        <Text style={{ fontSize: 30 }}>{!timerStart ? 'Start' : 'Stop'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetTimer}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableOpacity> */}
    </View>
  );
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
    justifyContent: 'space-around'
  }
});
