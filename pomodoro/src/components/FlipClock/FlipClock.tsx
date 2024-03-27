import React, {useEffect, useReducer} from 'react';

import Container from '../Container';
import Card from './Card';

import type {Style} from '../../styles/styles';
import type {Component} from '../../Types';

interface FlipClockProps {
  value: number;
}

function numberToTime(number: number) {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number - hours * 3600) / 60);
  const seconds = number - hours * 3600 - minutes * 60;

  return {hours, minutes, seconds};
}

function numberToTimeState(number: number): TimeState {
  const value = numberToTime(number);
  const prevValue = numberToTime(number - 1);
  const nextValue = numberToTime(number + 1);

  return [
    {
      seconds: {
        prevValue: prevValue.seconds,
        value: value.seconds,
        nextValue: nextValue.seconds,
      },
      minutes: {
        prevValue: prevValue.minutes,
        value: value.minutes,
        nextValue: nextValue.minutes,
      },
      hours: {
        prevValue: prevValue.hours,
        value: value.hours,
        nextValue: nextValue.hours,
      },
    },
  ];
}

type TimeState = {
  seconds: TimeValue;
  minutes: TimeValue;
  hours: TimeValue;
}[];

type TimeValue = {
  prevValue: number;
  value: number;
  nextValue: number;
  duration?: number;
};

type TimeActions = {type: 'push'; value: number} | {type: 'pop'};

const timeInitialState: TimeState = [
  {
    seconds: {prevValue: 0, value: 0, nextValue: 0},
    minutes: {prevValue: 0, value: 0, nextValue: 0},
    hours: {prevValue: 0, value: 0, nextValue: 0},
  },
];

function timeReducer(state: TimeState, action: TimeActions) {
  switch (action.type) {
    case 'push': {
      return [...numberToTimeState(action.value), ...state];
    }
    case 'pop': {
      if (state.length > 1) {
        return state.slice(-1);
      } else {
        return state;
      }
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
    () => numberToTimeState(value),
  );

  useEffect(() => {
    timeDispatch({type: 'push', value});
  }, [value]);

  const popTimeValue = () => {
    timeDispatch({type: 'pop'});
  };

  return (
    <>
      <Container style={containerStyle}>
        <Card
          onAnimateEnd={popTimeValue}
          value={time[0].hours}
          mode="incement"
        />
        <Card
          onAnimateEnd={popTimeValue}
          value={time[0].minutes}
          mode="incement"
        />
        <Card
          onAnimateEnd={popTimeValue}
          value={time[0].seconds}
          mode="incement"
        />
      </Container>
    </>
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
export type {FlipClockProps, TimeValue};
