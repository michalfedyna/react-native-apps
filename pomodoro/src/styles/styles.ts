import {useMemo} from 'react';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {useTheme} from './theme';
import type {Theme} from './theme';

type Styles<T extends StyleSheet.NamedStyles<T>> =
  | StyleSheet.NamedStyles<T>
  | ((theme: Theme) => StyleSheet.NamedStyles<T>);

type Style =
  | (ViewStyle | TextStyle | ImageStyle)
  | ((theme: Theme) => ViewStyle | TextStyle | ImageStyle);

function useStyles<T extends StyleSheet.NamedStyles<T>>(
  styles?: Styles<T>,
): StyleSheet.NamedStyles<T> | undefined {
  if (!styles) return;

  const theme = useTheme();

  return useMemo(
    () =>
      StyleSheet.create(typeof styles === 'function' ? styles(theme) : styles),
    [styles, theme],
  );
}

function useStyle(
  style?: Style,
): ViewStyle | TextStyle | ImageStyle | undefined {
  if (!style) return;

  const theme = useTheme();

  return useMemo(
    () => (typeof style === 'function' ? style(theme) : style),
    [style, theme],
  );
}

export {useStyles, useStyle};
export type {Styles, Style};
