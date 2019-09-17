import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Accordion, Layout, Row, Icon } from '../components';
import { Colors } from '../constants';
import { Program, programs, ProgramStep } from '../data';
import { ApplicationState, Progress, ProgressStep } from '../store';
import * as progressState from '../store/progress';

interface ProgramMenuScreenProps extends NavigationScreenProps {
  progress: Progress[];
  updateProgress: (slug: string, step: ProgressStep) => void;
}

const DisconnectedProgramMenuScreen: React.FC<ProgramMenuScreenProps> = ({ navigation, progress, updateProgress }) => {
  const [program, setProgram] = React.useState<Program>({} as Program);
  const [open, setOpen] = React.useState(0);
  const [steps, setSteps] = React.useState<ProgressStep[]>([]);

  React.useEffect(() => {
    const slug = navigation.getParam('slug');
    const [prog] = programs.filter(p => p.slug === slug);
    if (prog) {
      setProgram(prog);
    }
  }, [navigation.getParam('slug')]);

  React.useEffect(() => {
    const slug = navigation.getParam('slug');
    if (progress.length > 0) {
      const [currProgress] = progress.filter(p => p.slug === slug);
      if (currProgress) {
        setSteps(currProgress.steps);
      }
    }
  }, [progress]);

  const stepDone = (sect: ProgramStep) => {
    const [curStep] = steps.filter(s => s.label === sect.label && s.parent === sect.parent);
    if (curStep) {
      return true;
    }
    return false;
  };

  const updateStep = (sect: ProgramStep) => {
    const step: ProgressStep = {
      label: sect.label,
      parent: sect.parent
    };
    updateProgress(navigation.getParam('slug'), step);
  };

  const handlePress = (sect: ProgramStep) => {
    navigation.navigate('Workout', { slug: program.slug, step: sect, title: program.title });
  };

  return (
    <Layout>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.header}>Choose a Workout</Text>
        {program.outline &&
          program.outline.labels.map((label, index) => (
            <Accordion
              key={index}
              title={label}
              open={open === index}
              onOpen={() => (open === index ? setOpen(-1) : setOpen(index))}
            >
              {program.outline.sections
                .filter(sect => sect.parent === label)
                .map(sect => (
                  <TouchableOpacity
                    style={{ borderBottomColor: '#ddd', borderBottomWidth: 1 }}
                    key={sect.label}
                    disabled={sect.description.toLowerCase().includes('rest')}
                    onPress={() => handlePress(sect)}
                  >
                    <Row
                      align="center"
                      justify="space-between"
                      style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 10 }}
                    >
                      <View style={{ flex: 2 }}>
                        <Text style={{ fontWeight: 'bold' }}>{sect.label}</Text>
                        <Text style={{ paddingTop: 10 }}>{sect.description}</Text>
                      </View>
                      {/* @TODO: Add completed */}
                      {stepDone(sect) ? (
                        <TouchableOpacity onPress={() => updateStep(sect)}>
                          <Icon size={32} color={Colors.primary} name="check-circle" type="MI" />
                        </TouchableOpacity>
                      ) : sect.description.toLowerCase().includes('rest') ? (
                        <TouchableOpacity onPress={() => updateStep(sect)}>
                          <Icon size={32} color="#eee" name="check-circle" type="MI" />
                        </TouchableOpacity>
                      ) : (
                        <Icon size={32} color={Colors.primary} name="keyboard-arrow-right" type="MI" />
                      )}
                    </Row>
                  </TouchableOpacity>
                ))}
            </Accordion>
          ))}
      </ScrollView>
    </Layout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  progress: state.Progress.response
});

const actionCreators = {
  updateProgress: (slug: string, step: ProgressStep) => progressState.update(slug, step)
};

const mapActionsToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch)
});

export const ProgramMenuScreen = connect(
  mapStateToProps,
  mapActionsToProps
)(DisconnectedProgramMenuScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 10
  }
});
