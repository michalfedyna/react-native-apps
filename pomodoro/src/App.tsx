import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Providers from './Providers';
import Container from './components/Container';
import LocalizedText from './components/LocalizedText';

const App = () => {
  return (
    <Providers>
      <SafeAreaView style={styles.container}>
        <Container style={{backgroundColor: 'red'}}>
          <LocalizedText translation="actions.confirm" />
        </Container>
      </SafeAreaView>
    </Providers>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
