import {FunctionComponent, PropsWithChildren} from 'react';

type Component<T = unknown> = FunctionComponent<T>;

type ComponentWithChildren<T = unknown> = FunctionComponent<
  PropsWithChildren<T>
>;

type Hook<T = unknown, U = unknown> = (props: T) => U;

export type {Component, ComponentWithChildren, Hook};
