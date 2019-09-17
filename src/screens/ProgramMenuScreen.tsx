import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Accordion, Layout, Row, Icon } from '../components';
import { Program, programs } from '../data';
import { Colors } from '../constants';

interface ProgramMenuScreenProps extends NavigationScreenProps {}

const DisconnectedProgramMenuScreen: React.FC<ProgramMenuScreenProps> = ({ navigation }) => {
  const [program, setProgram] = React.useState<Program>({} as Program);
  const [open, setOpen] = React.useState(0);

  React.useEffect(() => {
    const slug = navigation.getParam('slug');
    const [prog] = programs.filter(p => p.slug === slug);
    if (prog) {
      setProgram(prog);
    }
  }, [navigation.getParam('slug')]);

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
                    onPress={() =>
                      navigation.navigate('Workout', { slug: program.slug, step: sect, title: program.title })
                    }
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
                      {!sect.description.toLowerCase().includes('rest') && (
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

export const ProgramMenuScreen = DisconnectedProgramMenuScreen;

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
