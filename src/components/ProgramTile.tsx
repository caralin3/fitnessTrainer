import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProgramTileProps {
  duration: string;
  imgSrc: ImageSourcePropType;
  onPress: () => void;
  title: string;
}

export const ProgramTile: React.FC<ProgramTileProps> = ({ duration, imgSrc, onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.duration}>{duration}</Text>
    <View style={styles.overlay} />
    <Image key={title} resizeMode="cover" source={imgSrc} style={styles.image} />
    <View style={styles.titleOverlay}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 3,
    height: 200,
    marginRight: 10,
    position: 'relative',
    justifyContent: 'space-between',
    width: 150
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 200,
    position: 'absolute',
    width: 150,
    zIndex: 1
  },
  duration: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    position: 'absolute',
    right: 0,
    zIndex: 2
  },
  titleOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    bottom: 0,
    padding: 5,
    position: 'absolute',
    left: 0,
    width: 150,
    zIndex: 1
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    zIndex: 2
  },
  image: {
    borderRadius: 3,
    height: 200,
    width: 150
  }
});
