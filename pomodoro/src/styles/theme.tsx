import React, {createContext, useContext, useReducer, useEffect} from 'react';
import {Appearance} from 'react-native';

import {ComponentWithChildren} from '../Types';

interface BaseTheme {
  spacing: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

interface Theme extends BaseTheme {}

const baseTheme: BaseTheme = {
  spacing: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
  },
};

const lightTheme: Theme = {...baseTheme};

const darkTheme: Theme = {...baseTheme};

const ThemeContext = createContext<Theme>(lightTheme);

function getInitialTheme() {
  const colorScheme = Appearance.getColorScheme();

  if (colorScheme === 'dark') return darkTheme;

  return lightTheme;
}

const themeReducer = (
  state: Theme,
  action: {type: 'set'; theme: 'dark' | 'light' | null | undefined},
) => {
  switch (action.type) {
    case 'set':
      return action.theme === 'dark' ? darkTheme : lightTheme;
    default:
      return state;
  }
};

const ThemeProvider: ComponentWithChildren = ({children}) => {
  const initialTheme = getInitialTheme();
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch({type: 'set', theme: colorScheme});
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

function useTheme() {
  return useContext(ThemeContext);
}

function setTheme(theme: 'dark' | 'light' | null) {
  Appearance.setColorScheme(theme);
}

export {ThemeProvider, useTheme, setTheme};

export type {Theme};
