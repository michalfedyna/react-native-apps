import React from 'react';

import Container from '../Container';
import AnimatedCard from './AnimatedCard';
import BackgroundCard from './BackgroudCard';

import type {Component} from '../../Types';
import type {Style} from '../../styles/styles';
import {TimeValue} from './FlipClock';

interface CardProps {
  value: TimeValue;
  mode: 'incement' | 'decrement' | 'input';
  onAnimateEnd: () => void;
}

const Card: Component<CardProps> = ({value, onAnimateEnd}) => {
  return (
    <Container style={containerStyle}>
      <BackgroundCard value={value} />
      <AnimatedCard value={value} onAnimateEnd={onAnimateEnd} />
    </Container>
  );
};

const containerStyle: Style = {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'white',
};

export default Card;
