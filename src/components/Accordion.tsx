import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from '../constants';
import { Icon } from './Icon';
import { Row } from './Layout';

interface AccordionProps {
  onOpen: () => void;
  open: boolean;
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const Accordion: React.SFC<AccordionProps> = ({ children, open, onOpen, style, title }) => (
  <View style={StyleSheet.flatten([style, { flex: 1 }])}>
    <TouchableOpacity style={styles.sectionHeader} onPress={onOpen}>
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
    backgroundColor: '#f2f2f2',
    padding: 5
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
