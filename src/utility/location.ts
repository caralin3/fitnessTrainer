import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import haversine from 'haversine';

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export const LOCATION_TASK = 'background-location-task';
export let distance = 0;
let prevCoords: Coordinate = {
  latitude: 0,
  longitude: 0
};

export const calcDist = (curCoords: Coordinate) => {
  if (prevCoords.latitude && prevCoords.longitude) {
    return haversine(prevCoords, curCoords, { unit: 'mile' });
  }
  return 0;
};

// tslint:disable-next-line no-any
export const handleLocationUpdates = async ({ data, error }: any) => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    console.log(status);
  }

  if (error) {
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    locations.forEach((loc: Location.LocationData) => {
      const { coords } = loc;
      const curCoords = {
        latitude: coords.latitude,
        longitude: coords.longitude
      };
      distance = distance + calcDist(curCoords);
      prevCoords = curCoords;
      // console.log('Dist', distance, new Date(loc.timestamp));
    });
  }
};

TaskManager.defineTask(LOCATION_TASK, handleLocationUpdates);

export const startLocation = async () =>
  await Location.startLocationUpdatesAsync(LOCATION_TASK, {
    accuracy: Location.Accuracy.Highest,
    distanceInterval: 1
  });

export const stopLocation = async () => {
  await Location.stopLocationUpdatesAsync(LOCATION_TASK);
};

export const resetDistance = () => (distance = 0);
