import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ThemeProvider} from './styles/theme';

import {ComponentWithChildren} from './Types';
import {TranslationProvider} from './i18n/localization';

const Providers: ComponentWithChildren = ({children}) => {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          {children}
        </GestureHandlerRootView>
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default Providers;
