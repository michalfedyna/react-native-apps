import {useMemo} from 'react';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {useTheme} from './theme';
import type {Theme} from './theme';

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

type Styles<T extends NamedStyles<T>> =
  | NamedStyles<T>
  | ((theme: Theme) => NamedStyles<T>);

type Style =
  | (ViewStyle | TextStyle | ImageStyle)
  | ((theme: Theme) => ViewStyle | TextStyle | ImageStyle);

function useStyles<T extends NamedStyles<T>>(
  styles: Styles<T>,
): {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
} {
  const theme = useTheme();

  return useMemo(
    () =>
      StyleSheet.create(typeof styles === 'function' ? styles(theme) : styles),
    [styles, theme],
  );
}

function useStyle(style: Style): ViewStyle | TextStyle | ImageStyle {
  const theme = useTheme();

  return useMemo(
    () => (typeof style === 'function' ? style(theme) : style),
    [style, theme],
  );
}

export {useStyles, useStyle};
export type {Styles, Style};
