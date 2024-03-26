import {FunctionComponent, PropsWithChildren} from 'react';

type Component<T = unknown> = FunctionComponent<T>;

type ComponentWithChildren<T = unknown> = FunctionComponent<
  PropsWithChildren<T>
>;

export type {Component, ComponentWithChildren};
