import React from 'react';
import {Text as RNText} from 'react-native';

import {useStyle} from '../styles/styles';

import type {ComponentWithChildren} from '../Types';
import type {Style} from '../styles/styles';

interface TextProps {
  style?: Style;
}

const Text: ComponentWithChildren<TextProps> = ({children, style = {}}) => {
  const textStyle = useStyle(style);

  return <RNText style={textStyle}>{children}</RNText>;
};

export default Text;
export type {TextProps};
