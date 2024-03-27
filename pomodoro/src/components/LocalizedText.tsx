import React from 'react';

import Text from './Text';
import type {TextProps} from './Text';

import {useTranslation} from '../i18n/localization';

import type {TranslationKey} from '../i18n/localization';
import type {Component} from '../Types';

interface LocalizedTextProps extends TextProps {
  translation: TranslationKey;
}

const LocalizedText: Component<LocalizedTextProps> = ({
  translation,
  style = {},
}) => {
  const getTranslation = useTranslation();

  return <Text style={style}>{getTranslation(translation)}</Text>;
};

export default LocalizedText;
