import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import haversine from 'haversine';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// interface RecordScreenProps {}

interface RecordScreenState {
  distance: number;
  prevCoords: {
    latitude: number;
    longitude: number;
  };
}

class DisconnectedRecordScreen extends React.Component<{}, RecordScreenState> {
  locationListener: { remove(): void } | null = null;

  dist: number = 0;

  state: RecordScreenState = {
    distance: 0,
    prevCoords: { latitude: 0, longitude: 0 }
  };

  componentDidMount() {
    this._watchLocation();
  }

  componentWillUnmount() {
    if (this.locationListener) {
      this.locationListener.remove();
    }
  }

  calcDist = (curCoords: { latitude: number; longitude: number }) => {
    const { prevCoords } = this.state;
    if (prevCoords.latitude && prevCoords.longitude) {
      return haversine(prevCoords, curCoords, { unit: 'mile' });
    }
    return 0;
  };

  _watchLocation = async () => {
    const { distance } = this.state;
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
          distance: distance + this.calcDist(curCoords),
          prevCoords: curCoords
        });
      }
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Screen</Text>
          <Text>Distance: {this.dist.toFixed(4)} mi</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export const RecordScreen = DisconnectedRecordScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
