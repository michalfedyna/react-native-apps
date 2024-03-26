import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Providers from './Providers';
import Container from './components/Container';

const App = () => {
  return (
    <Providers>
      <SafeAreaView style={styles.container}>
        <Container></Container>
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
