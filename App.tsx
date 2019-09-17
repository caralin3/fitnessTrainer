// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { AppNavigator } from './src/navigation';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AppNavigator />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import AppNavigator from './src/navigation/AppNavigator';
import { ApplicationState, createStore } from './src/store';

interface AppProps {
  skipLoadingScreen: boolean;
}

const App = (props: AppProps) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const store: Store<ApplicationState> = createStore();

  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([require('./src/assets/images/running.jpeg'), require('./src/assets/images/running_2.jpeg')]),
      Font.loadAsync({
        ...FontAwesome.font,
        ...MaterialIcons.font,
        ...MaterialCommunityIcons.font
      })
    ]);
  };

  const handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  };

  const handleFinishLoading = (setComplete: (bool: boolean) => void) => {
    setComplete(true);
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => handleFinishLoading(setLoadingComplete)}
          />
        </PersistGate>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
