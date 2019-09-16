import * as Permissions from 'expo-permissions';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Layout, Row, Button, Accordion, ProgramTileList } from '../components';
import { Program, programs } from '../data';
import { isAndroid, Colors } from '../constants';
import { registerForPushNotificationsAsync } from '../utility';

interface ProgramScreenProps extends NavigationScreenProps {}

const DisconnectedProgramScreen: React.FC<ProgramScreenProps> = ({ navigation }) => {
  const scrollRef = React.useRef(null);
  const [program, setProgram] = React.useState<Program>({} as Program);
  const [open, setOpen] = React.useState(-1);

  React.useEffect(() => {
    const slug = navigation.getParam('slug');
    const [prog] = programs.filter(p => p.slug === slug);
    if (prog) {
      setProgram(prog);
    }
  }, [navigation.getParam('slug')]);

  const handleTilePress = (slug: string) => {
    navigation.navigate('Program', { slug });
    if (scrollRef.current) {
      // tslint:disable-next-line no-any
      (scrollRef.current as any).scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  const handleStartProgram = async (slug: string, title: string) => {
    navigation.navigate('ProgramMenu', { slug, title });
    await registerForPushNotificationsAsync();
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log(status);
    }
  };

  return (
    <Layout>
      <ScrollView style={{ flex: 1 }} ref={scrollRef}>
        <View style={styles.header}>
          <View style={styles.overlay} />
          <Image resizeMode="cover" source={require('../assets/images/running_3.jpeg')} style={styles.feature} />
          <View style={styles.titleOverlay}>
            <Text style={styles.title}>{program.title}</Text>
          </View>
          <Text style={styles.duration}>{program.duration}</Text>
        </View>
        <View style={styles.container}>
          <Row align="center" justify="space-between">
            <Text style={styles.capitalize}>Level: {program.level}</Text>
            <Text>Category: {program.category}</Text>
          </Row>
          <Text style={styles.description}>{program.description}</Text>
          {program.tips && (
            <View>
              <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Tips</Text>
              {program.tips.map(tip => (
                <Text key={tip} style={{ fontSize: isAndroid ? 14 : 12 }}>
                  • {tip}
                </Text>
              ))}
            </View>
          )}
          {program.url && (
            <TouchableOpacity
              style={{ alignSelf: 'flex-end', paddingTop: 10 }}
              onPress={() => Linking.openURL(program.url || '')}
            >
              <Text style={{ color: Colors.accent, fontWeight: 'bold' }}>View Source</Text>
            </TouchableOpacity>
          )}
          <Button
            style={{ marginVertical: 10 }}
            bgColor={Colors.primary}
            size="md"
            text="Start Program"
            onPress={() => handleStartProgram(program.slug, program.title)}
          />
          <View style={{ paddingVertical: 10 }}>
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
                      <View key={sect.label} style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>{sect.label}</Text>
                        <Text style={{ paddingTop: 10 }}>{sect.description}</Text>
                      </View>
                    ))}
                </Accordion>
              ))}
          </View>
          {program && program.similar && (
            <View>
              <Text style={{ paddingVertical: 5 }}>Recommended</Text>
              <ProgramTileList
                programs={programs.filter(p => program.similar.indexOf(p.slug) !== -1)}
                onPress={handleTilePress}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export const ProgramScreen = DisconnectedProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    height: 200,
    position: 'relative',
    width: '100%'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 200,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    zIndex: 2
  },
  titleOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    bottom: 0,
    padding: 5,
    position: 'absolute',
    left: 0,
    width: '100%',
    zIndex: 1
  },
  duration: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2
  },
  feature: {
    height: 200,
    width: '100%'
  },
  description: {
    paddingVertical: 10
  }
});
