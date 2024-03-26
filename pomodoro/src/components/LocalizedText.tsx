import React from 'react';
import {Text} from 'react-native';

import {useTranslation} from '../i18n/localization';
import {useStyle} from '../styles/styles';

import type {TranslationKey} from '../i18n/localization';
import type {Component} from '../Types';
import type {Style} from '../styles/styles';

interface LocalizedTextProps {
  translation: TranslationKey;
  style?: Style;
}

const LocalizedText: Component<LocalizedTextProps> = ({translation, style}) => {
  const textStyle = useStyle(style);
  const getTranslation = useTranslation();

  return <Text style={textStyle}>{getTranslation(translation)}</Text>;
};

export default LocalizedText;
