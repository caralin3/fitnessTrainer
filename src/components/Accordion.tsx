import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from '../constants';
import { Icon } from './Icon';
import { Row } from './Layout';

interface AccordionProps {
  bgColor?: string;
  onOpen: () => void;
  open: boolean;
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const Accordion: React.SFC<AccordionProps> = ({ bgColor, children, open, onOpen, style, title }) => (
  <View style={StyleSheet.flatten([style, { flex: 1 }])}>
    <TouchableOpacity
      style={StyleSheet.flatten([styles.sectionHeader, { backgroundColor: bgColor ? bgColor : '#ddd' }])}
      onPress={onOpen}
    >
      <Row align="center" justify="space-between">
        <Text style={styles.sectionTitle}>{title}</Text>
        <Icon color="black" size={24} type="MI" name={`keyboard-arrow-${open ? 'up' : 'down'}`} />
      </Row>
    </TouchableOpacity>
    {open && <View>{children}</View>}
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 5
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
