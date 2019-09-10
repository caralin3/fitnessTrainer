import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import Colors from '../constants/Colors';
import { Icon, IconType } from './Icon';

interface TileProps {
  icon: {
    name: string;
    type: IconType;
  };
  onPress: () => void;
  title: string;
}

export const Tile: React.FC<TileProps> = ({ icon, onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon name={icon.name} type={icon.type} color="white" size={32} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 10,
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
    width: 150
  },
  text: {
    color: 'white'
  }
});
