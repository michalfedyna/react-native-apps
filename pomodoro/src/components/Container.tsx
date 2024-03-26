import React from 'react';
import {View} from 'react-native';

import {ComponentWithChildren} from '../Types';

import {useStyle} from '../styles/styles';
import type {Style} from '../styles/styles';

interface ContainerProps {
  style?: Style;
}

const Container: ComponentWithChildren<ContainerProps> = ({
  children,
  style,
}) => {
  const containerStyle = useStyle(style);

  return <View style={containerStyle}>{children}</View>;
};

export default Container;
export type {ContainerProps};
