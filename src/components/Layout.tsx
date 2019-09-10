import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Dimensions from '../constants/Dimensions';
import { isAndroid } from '../constants/System';

interface LayoutProps {
  androidSafeArea?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ androidSafeArea, children }) => {
  return (
    <SafeAreaView
      style={StyleSheet.flatten([styles.container, androidSafeArea && isAndroid ? styles.androidPadding : undefined])}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  androidPadding: {
    paddingTop: Dimensions.height * 0.08
  }
});
