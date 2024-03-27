import React from 'react';
import {Text, TextStyle} from 'react-native';

import Container from '../Container';

import type {Component} from '../../Types';
import {Style} from '../../styles/styles';

interface BackgroundCardProps {
  value: number;
}

// TODO: Top and bottom halfs

const BackgroundCard: Component<BackgroundCardProps> = ({value}) => {
  return (
    <>
      <Container>
        <Text style={textStyle}>{value}</Text>
      </Container>
      <Container style={containerTopStyle}>
        <Text style={textStyleTop}>{value + 1}</Text>
      </Container>
    </>
  );
};

const textStyle: TextStyle = {
  fontSize: 64,
  backgroundColor: 'blue',
};

const containerTopStyle: Style = {
  position: 'absolute',
  height: '50%',
};

const textStyleTop: TextStyle = {
  fontSize: 64,
  backgroundColor: 'pink',
};

export default BackgroundCard;
