import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import haversine from 'haversine';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { startLocation, stopLocation, distance } from '../utility/location';
import { Layout } from '../components';

interface RecordScreenProps extends NavigationScreenProps {}

interface RecordScreenState {
  distance: number;
  prevCoords: {
    latitude: number;
    longitude: number;
  };
  started: boolean;
}

class DisconnectedRecordScreen extends React.Component<RecordScreenProps, RecordScreenState> {
  locationListener: { remove(): void } | null = null;

  dist: number = 0;

  state: RecordScreenState = {
    distance: 0,
    prevCoords: { latitude: 0, longitude: 0 },
    started: false
  };

  async componentDidMount() {
    this._watchLocation();
    // startLocation();
  }

  componentWillUnmount() {
    if (this.locationListener) {
      this.locationListener.remove();
    }
    // stopLocation();
  }

  calcDist = (curCoords: { latitude: number; longitude: number }) => {
    const { prevCoords } = this.state;
    if (prevCoords.latitude && prevCoords.longitude) {
      return haversine(prevCoords, curCoords, { unit: 'mile' });
    }
    return 0;
  };

  _watchLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log(status);
    }
    // const { distance } = this.state;
    this.locationListener = await Location.watchPositionAsync(
      {
        distanceInterval: 1,
        accuracy: Location.Accuracy.Highest
      },
      location => {
        const curCoords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        };
        this.dist = this.dist + this.calcDist(curCoords);
        this.setState({
          // distance: distance + this.calcDist(curCoords),
          prevCoords: curCoords
        });
      }
    );
  };

  render() {
    console.log('Dist', distance);

    return (
      <Layout>
        <View style={styles.container}>
          <Text style={styles.dist}>Distance: {distance.toFixed(3)} mi</Text>
          {/* <Text>Distance: {this.dist.toFixed(3)} mi</Text> */}
          {this.state.started ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                stopLocation();
                this.setState({ started: false });
              }}
            >
              <Text style={styles.dist}>Stop</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                startLocation();
                this.setState({ started: true });
              }}
            >
              <Text style={styles.dist}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
      </Layout>
    );
  }
}

export const RecordScreen = DisconnectedRecordScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  dist: {
    fontSize: 24
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 10
  }
});
