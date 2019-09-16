import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { ProgramTile } from './ProgramTile';
import { Program } from '../data';

interface ProgramTileListProps {
  onPress: (link: string) => void;
  programs: Program[];
}

export const ProgramTileList: React.FC<ProgramTileListProps> = ({ onPress, programs }) => (
  <FlatList
    data={programs}
    renderItem={({ item, index }) => <ProgramTile key={index} {...item} onPress={() => onPress(item.slug)} />}
    horizontal={true}
    keyExtractor={item => item.title}
    ListEmptyComponent={() => <Text style={styles.empty}>No programs</Text>}
  />
);

const styles = StyleSheet.create({
  empty: {
    color: 'gray',
    paddingHorizontal: 10
  }
});
