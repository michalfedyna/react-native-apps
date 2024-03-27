import React, {useEffect, useReducer} from 'react';

import Container from '../Container';
import Card from './Card';

import type {Style} from '../../styles/styles';
import type {Component} from '../../Types';

interface FlipClockProps {
  value: number;
}

function numberToTime(number: number): Time {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number - hours * 3600) / 60);
  const seconds = number - hours * 3600 - minutes * 60;
  return {hours, minutes, seconds};
}

export type Time = {
  seconds: number;
  minutes: number;
  hours: number;
};

type TimeState = {
  prevValue: Time;
  value: Time;
  nextValue: Time;
};

type TimeActions = {type: 'set'; value: number};

const timeInitialState = {
  prevValue: {seconds: 0, minutes: 0, hours: 0},
  value: {seconds: 0, minutes: 0, hours: 0},
  nextValue: {seconds: 0, minutes: 0, hours: 0},
};

function timeReducer(state: TimeState, action: TimeActions) {
  switch (action.type) {
    case 'set': {
      return state;
    }
    default: {
      return state;
    }
  }
}

const FlipClock: Component<FlipClockProps> = ({value}) => {
  const [time, timeDispatch] = useReducer<typeof timeReducer, TimeState>(
    timeReducer,
    timeInitialState,
    () => ({
      prevValue: numberToTime(value - 1),
      value: numberToTime(value),
      nextValue: numberToTime(value + 1),
    }),
  );

  useEffect(() => {}, [value]);

  const seconds = {
    prevValue: time.prevValue.seconds,
    value: time.value.seconds,
    nextValue: time.nextValue.seconds,
  };

  const minutes = {
    prevValue: time.prevValue.minutes,
    value: time.value.minutes,
    nextValue: time.nextValue.minutes,
  };

  const hours = {
    prevValue: time.prevValue.hours,
    value: time.value.hours,
    nextValue: time.nextValue.hours,
  };

  console.log(time);

  return (
    <Container style={containerStyle}>
      <Card value={hours} mode="incement" />
      <Card value={minutes} mode="incement" />
      <Card value={seconds} mode="incement" />
    </Container>
  );
};

const containerStyle: Style = {
  position: 'relative',
  gap: 20,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ff0',
};

export default FlipClock;
export type {FlipClockProps};
