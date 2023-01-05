import React from 'react';
import {Image, ImageStyle, View} from 'react-native';
import {IconProps} from './icon.props';
import {icons} from './icons';

const ICON_SIZE: ImageStyle = {
  resizeMode: 'contain',
  width: '100%',
  height: '100%',
};

const iconPreset = {
  large: {
    width: 45,
    height: 45,
  },
  medium: {
    width: 36,
    height: 36,
  },
  small: {
    width: 24,
    height: 24,
  },
  xl: {
    width: 20,
    height: 20,
  },
  xls: {
    width: 18,
    height: 18,
  },
  xs: {
    width: 16,
    height: 16,
  },
};

export type IconPreset = keyof typeof iconPreset;

export const Icon = (props: IconProps) => {
  const {
    style: styleOverride,
    icon,
    containerStyle: overrideContainerStyle,
    preset = 'small',
  } = props;
  const containerStyle = iconPreset[preset];
  return (
    <View style={[containerStyle, overrideContainerStyle]}>
      <Image
        style={[ICON_SIZE, styleOverride]}
        source={icons[icon]}
        resizeMode="contain"
      />
    </View>
  );
};
