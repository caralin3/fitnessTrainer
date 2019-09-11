import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
  bgColor: string;
  color?: string;
  onPress: () => void;
  size: 'sm' | 'md' | 'lg';
  style?: StyleProp<ViewStyle>;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ bgColor, color, onPress, size, style, text }) => (
  <TouchableOpacity
    style={StyleSheet.flatten([
      style,
      {
        backgroundColor: bgColor,
        borderRadius: 3,
        paddingHorizontal: size === 'sm' ? 5 : size === 'md' ? 10 : 20,
        paddingVertical: size === 'sm' ? 5 : size === 'md' ? 10 : 12
      }
    ])}
    onPress={onPress}
  >
    <Text
      style={{
        color: color ? color : 'black',
        fontWeight: 'bold',
        fontSize: size === 'sm' ? 12 : size === 'md' ? 16 : 20,
        textAlign: 'center'
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
