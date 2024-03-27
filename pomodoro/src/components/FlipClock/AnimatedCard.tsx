import React, {useEffect} from 'react';
import {TextStyle} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import useAnimatedCardState from './useAnimatedCardState';

import Container from '../Container';

import {formatToString} from './utils';
import {TimeValue} from './FlipClock';

import type {Component} from '../../Types';
import type {Style} from '../../styles/styles';

interface AnimatedCardProps {
  value: TimeValue;
  onAnimateEnd: () => void;
}

const AnimatedCard: Component<AnimatedCardProps> = ({value}) => {
  const {rotateBottom, rotateTop} = useAnimatedCardState({value});

  const animatedStyleTop = useAnimatedStyle(() => {
    return {
      transform: [{rotateX: rotateTop.value}],
    };
  });

  const animatedStyleBottom = useAnimatedStyle(() => {
    return {
      transform: [{rotateX: rotateBottom.value}],
    };
  });

  return (
    <>
      <Container style={containerStyleTop}>
        <Animated.Text style={[textStyleTop, animatedStyleTop]}>
          {formatToString(value.value)}
        </Animated.Text>
      </Container>
      <Container style={containerStyleBottom}>
        <Animated.Text style={[textStyleBottom, animatedStyleBottom]}>
          {formatToString(value.nextValue)}
        </Animated.Text>
      </Container>
    </>
  );
};

const containerStyleTop: Style = {
  position: 'absolute',
};

const textStyleTop: TextStyle = {
  backgroundColor: 'green',
  position: 'relative',
  fontSize: 64,
};

const containerStyleBottom: Style = {
  position: 'absolute',
  overflow: 'hidden',
  top: '50%',
};

const textStyleBottom: TextStyle = {
  backgroundColor: 'red',
  position: 'relative',
  fontSize: 64,
  bottom: '50%',
};

export default AnimatedCard;
