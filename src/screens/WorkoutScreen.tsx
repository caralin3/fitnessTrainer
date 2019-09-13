import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { Button, Layout, Row } from '../components';
import { Program, ProgramStep, programs } from '../data';
import { Colors } from '../constants';
import { distance, resetDistance, startLocation, stopLocation } from '../utility/location';

interface WorkoutScreenProps extends NavigationScreenProps {}

const DisconnectedWorkoutScreen: React.FC<WorkoutScreenProps> = ({ navigation }) => {
  const [program, setProgram] = React.useState<Program>({} as Program);
  const [workout, setWorkout] = React.useState<ProgramStep>({} as ProgramStep);
  const [running, setRunning] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState('');

  const handleStart = () => {
    setRunning(true);
    setStart(true);
    setReset(false);
    startLocation();
  };

  const handleStop = () => {
    setStart(!start);
    setReset(false);
    stopLocation();
  };

  const handleReset = () => {
    setRunning(false);
    setStart(false);
    setReset(true);
    setLaps([]);
    resetDistance();
  };

  React.useEffect(() => {
    const slug = navigation.getParam('slug');
    const step = navigation.getParam('step') as ProgramStep;
    const [prog] = programs.filter(p => p.slug === slug);
    const [progStep] = prog.outline.sections.filter(p => p.label === step.label);
    if (prog) {
      setProgram(prog);
    }
    if (progStep) {
      setWorkout(progStep);
    }
  }, [navigation.getParam('step')]);

  return (
    <Layout>
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>{workout.label}</Text>
          <Text style={{ paddingTop: 10 }}>{workout.description}</Text>
        </View>
        <Row style={{ width: '100%' }} align="center" justify="space-around">
          <View style={styles.stats}>
            <Text style={styles.statLabel}>Time</Text>
            <Stopwatch start={start} reset={reset} options={options} getTime={time => setCurrentTime(time)} />
          </View>
          <View style={styles.stats}>
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.stat}>{distance.toFixed(2)}</Text>
          </View>
        </Row>
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
            {!start && (
              <Button
                size="lg"
                style={{ width: 125 }}
                color="white"
                bgColor="black"
                text="Reset"
                onPress={handleReset}
              />
            )}
          </Row>
        )}
      </View>
    </Layout>
  );
};

export const WorkoutScreen = DisconnectedWorkoutScreen;

const options = {
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 22
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10
  },
  stats: {
    alignItems: 'center'
  },
  statLabel: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  stat: {
    fontSize: 22
  }
});
