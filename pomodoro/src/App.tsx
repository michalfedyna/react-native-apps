import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import Providers from './Providers';
import FlipClock from './components/FlipClock/FlipClock';

import {useStyles} from './styles/styles';
import Container from './components/Container';

const App = () => {
  const styles = useStyles({
    saveArea: {flex: 1},
    container: {flex: 1, justifyContent: 'center'},
  });

  const [value, setValue] = useState(0);

  return (
    <Providers>
      <SafeAreaView style={styles.saveArea}>
        <Container style={styles.container}>
          <FlipClock value={value} />
        </Container>
      </SafeAreaView>
    </Providers>
  );
};

export default App;
