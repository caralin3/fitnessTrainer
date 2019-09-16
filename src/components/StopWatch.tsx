import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { Row } from './Layout';
import { Button } from './Button';
import { Colors } from '../constants';

export interface StopWatchProps {}

export const StopWatch: React.FC<StopWatchProps> = () => {
  // tslint:disable-next-line no-any
  let flatList: any;
  const [running, setRunning] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [laps, setLaps] = React.useState<string[]>([]);
  const [reset, setReset] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState('');

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
      <View style={StyleSheet.flatten([styles.stopwatch, running ? styles.circle : undefined])}>
        <Stopwatch laps msecs start={start} reset={reset} options={options} getTime={time => setCurrentTime(time)} />
      </View>
      {running && laps.length > 0 && (
        <View style={styles.laps}>
          <FlatList
            inverted
            contentContainerStyle={{ alignItems: 'center', width: '100%' }}
            ref={ref => (flatList = ref)}
            onContentSizeChange={() => flatList.scrollToEnd({ animated: true })}
            data={laps}
            renderItem={({ item, index }) => (
              <Row key={index} style={{ marginBottom: 10, width: '100%' }} align="center" justify="space-around">
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Lap {index + 1}</Text>
                <Text style={{ fontSize: 16 }}>{item}</Text>
              </Row>
            )}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      )}
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
            <Button size="lg" style={{ width: 125 }} color="white" bgColor="black" text="Reset" onPress={handleReset} />
          ) : (
            <Button size="lg" style={{ width: 125 }} color="white" bgColor="black" text="Lap" onPress={handleLap} />
          )}
        </Row>
      )}
    </View>
  );
};

const options = {
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 36
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around'
  },
  stopwatch: {
    height: 250,
    justifyContent: 'center',
    width: 250
  },
  circle: {
    borderColor: Colors.primary,
    borderRadius: 250 / 2,
    borderWidth: 3
  },
  laps: {
    alignItems: 'center',
    height: 150,
    width: '100%'
  }
});
