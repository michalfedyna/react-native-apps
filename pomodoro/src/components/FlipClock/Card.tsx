import React from 'react';

import Container from '../Container';
import AnimatedCard from './AnimatedCard';
import BackgroundCard from './BackgroudCard';

import type {Component} from '../../Types';
import type {Style} from '../../styles/styles';

interface CardProps {
  value: {prevValue: number; value: number; nextValue: number};
  mode: 'incement' | 'decrement' | 'input';
}

// TODO: Make AninmatedCards into a single component

const Card: Component<CardProps> = ({value}) => {
  return (
    <Container style={containerStyle}>
      <BackgroundCard value={value} />
      {/* <AnimatedCard value={value} /> */}
    </Container>
  );
};

const containerStyle: Style = {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'white',
};

export default Card;
