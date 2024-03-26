import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  Dispatch,
} from 'react';

import en_US from './en';

type Translation = typeof en_US;

type TranslationKey = DotNestedKeys<Translation>;

type Languages = 'en_US';

type Translations = {
  [K in Languages]: Translation;
};

const TranslationContext = createContext<Translation>(en_US);

const TranslationDispatchContext =
  createContext<Dispatch<TranslationActions> | null>(null);

const translations: Translations = {
  en_US: en_US,
};

const getInitialTranslation = () => {
  return en_US;
};

type TranslationActions = {type: 'set'; translation: Languages};

const translationReducer = (state: Translation, action: TranslationActions) => {
  switch (action.type) {
    case 'set':
      return translations[action.translation];
    default:
      return state;
  }
};

const TranslationProvider = ({children}: {children: React.ReactNode}) => {
  const initialTranslation = getInitialTranslation();
  const [translation, dispatch] = useReducer(
    translationReducer,
    initialTranslation,
  );

  return (
    <TranslationDispatchContext.Provider value={dispatch}>
      <TranslationContext.Provider value={translation}>
        {children}
      </TranslationContext.Provider>
    </TranslationDispatchContext.Provider>
  );
};

const useTranslation = () => {
  const translation = useContext(TranslationContext);
  return useCallback(
    (key: string) => getValueFromObject(key, translation),
    [translation],
  );
};

const useChangeTranslation = () => {
  const dispatch = useContext(TranslationDispatchContext);

  return (language: Languages) => {
    if (!dispatch) return console.error('Missing Translations Provider');
    dispatch({type: 'set', translation: language});
  };
};

export {TranslationProvider, useTranslation, useChangeTranslation};
export type {Translation, TranslationKey};

// Utility type
type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

const getValueFromObject = (key: string, object: any) => {
  let tempObject = {...object};
  let returnValue = '';

  const keys = key.split('.');

  keys.forEach(val => {
    if (typeof tempObject[val] === 'string') returnValue = tempObject[val];
    else if (tempObject[val]) tempObject = tempObject[val];
  });

  return returnValue;
};
