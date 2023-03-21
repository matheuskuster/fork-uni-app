import {
  useDispatch as ReduxUseDispatch,
  useSelector as ReduxUseSelector,
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState, AppDispatch } from './store';

export const useDispatch: () => AppDispatch = ReduxUseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = ReduxUseSelector;
