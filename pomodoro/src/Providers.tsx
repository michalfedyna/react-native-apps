import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ThemeProvider} from './styles/theme';

import {ComponentWithChildren} from './Types';

const Providers: ComponentWithChildren = ({children}) => {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        {children}
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default Providers;
