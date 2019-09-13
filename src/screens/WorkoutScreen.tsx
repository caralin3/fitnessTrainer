import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Button, Layout, Row } from '../components';
import { Program, ProgramStep, programs } from '../data';
import { Colors } from '../constants';

interface WorkoutScreenProps extends NavigationScreenProps {}

const DisconnectedWorkoutScreen: React.FC<WorkoutScreenProps> = ({ navigation }) => {
  const [program, setProgram] = React.useState<Program>({} as Program);
  const [workout, setWorkout] = React.useState<ProgramStep>({} as ProgramStep);
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
        <Row align="center" justify="space-between">
          <Button size="md" style={{ width: 125 }} bgColor={Colors.primary} text="Start" onPress={handleStart} />
        </Row>
      </View>
    </Layout>
  );
};

export const WorkoutScreen = DisconnectedWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  }
});
