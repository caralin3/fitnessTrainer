import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export type IconType = 'FA' | 'MI' | 'MCI';

export interface IconProps {
  color: string;
  name: string;
  size: number;
  type: IconType;
}

export const Icon: React.FC<IconProps> = ({ type, ...iconProps }) =>
  type === 'FA' ? (
    <FontAwesome5 {...iconProps} />
  ) : type === 'MI' ? (
    <MaterialIcons {...iconProps} />
  ) : (
    <MaterialCommunityIcons {...iconProps} />
  );
