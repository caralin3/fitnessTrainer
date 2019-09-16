import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TileProps {
  imgSrc: ImageSourcePropType;
  onPress: () => void;
  title: string;
}

export const Tile: React.FC<TileProps> = ({ imgSrc, onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.overlay} />
    <Image key={title} resizeMode="cover" source={imgSrc} style={styles.image} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 3,
    height: 150,
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
    width: 150
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 150,
    position: 'absolute',
    width: 150,
    zIndex: 1
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 2
  },
  image: {
    borderRadius: 3,
    height: 150,
    width: 150
  }
});
