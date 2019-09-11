import React from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { ProgramTile } from './ProgramTile';

interface ProgramTileListProps {
  onPress: (link: string) => void;
  programs: Array<{
    category?: 'cardio' | 'strength' | 'yoga' | 'flexibility';
    duration: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    link: string;
    imgSrc: ImageSourcePropType;
    title: string;
  }>;
}

export const ProgramTileList: React.FC<ProgramTileListProps> = ({ onPress, programs }) => (
  <FlatList
    data={programs}
    renderItem={({ item, index }) => <ProgramTile key={index} {...item} onPress={() => onPress(item.link)} />}
    horizontal={true}
    keyExtractor={item => item.title}
  />
);
