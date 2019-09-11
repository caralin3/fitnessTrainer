import React from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Dimensions from '../constants/Dimensions';
import { isAndroid } from '../constants/System';

interface LayoutProps {
  androidSafeArea?: boolean;
}

export const Layout: React.SFC<LayoutProps> = ({ androidSafeArea, children }) => (
  <SafeAreaView
    style={StyleSheet.flatten([styles.container, androidSafeArea && isAndroid ? styles.androidPadding : undefined])}
  >
    {children}
  </SafeAreaView>
);

interface RowProps {
  align?: 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flex?: number;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  style?: StyleProp<ViewStyle>;
}
export const Row: React.SFC<RowProps> = ({ align, children, flex, justify, style }) => (
  <View
    style={StyleSheet.flatten([
      style,
      {
        alignItems: align,
        flex,
        flexDirection: 'row',
        justifyContent: justify
      }
    ])}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  androidPadding: {
    paddingTop: Dimensions.height * 0.08
  }
});
