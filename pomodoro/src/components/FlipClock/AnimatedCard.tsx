import React, {useEffect} from 'react';
import {TextStyle} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import Container from '../Container';

import type {Component} from '../../Types';
import type {Style} from '../../styles/styles';

interface AnimatedCardProps {
  value: number;
}

const AnimatedCard: Component<AnimatedCardProps> = ({value}) => {
  const rotateXTop = useSharedValue('0deg');
  const rotateXBottom = useSharedValue('90deg');

  const animatedStyleTop = useAnimatedStyle(() => {
    return {
      transform: [{rotateX: rotateXTop.value}],
    };
  });

  const animatedStyleBottom = useAnimatedStyle(() => {
    return {
      transform: [{rotateX: rotateXBottom.value}],
    };
  });

  useEffect(() => {
    const rotationTop = '90deg';
    const rotationBottom = '0';

    rotateXTop.value = withRepeat(
      withDelay(
        500,
        withTiming(rotationTop, {duration: 500}, () => {
          rotateXBottom.value = withTiming(
            rotationBottom,
            {duration: 500},
            () => {
              rotateXBottom.value = '90deg';
            },
          );
        }),
      ),
      0,
    );
  });

  return (
    <>
      <Container style={containerStyleTop}>
        <Animated.Text style={[textStyleTop, animatedStyleTop]}>
          {value}
        </Animated.Text>
      </Container>
      <Container style={containerStyleBottom}>
        <Animated.Text style={[textStyleBottom, animatedStyleBottom]}>
          {value + 1}
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
