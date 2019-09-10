import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  bgColor: string;
  color?: string;
  onPress: () => void;
  size: 'sm' | 'md' | 'lg';
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ bgColor, color, onPress, size, text }) => (
  <TouchableOpacity
    style={{
      backgroundColor: bgColor,
      borderRadius: 3,
      paddingHorizontal: size === 'sm' ? 5 : size === 'md' ? 10 : 20,
      paddingVertical: size === 'sm' ? 5 : size === 'md' ? 10 : 12
    }}
    onPress={onPress}
  >
    <Text
      style={{
        color: color ? color : 'black',
        fontWeight: 'bold',
        fontSize: size === 'sm' ? 12 : size === 'md' ? 16 : 20
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
