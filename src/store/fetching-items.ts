import { Action } from 'redux';
import { isFetchItemAction, isSetItemAction } from './actions';

export interface ReducerState {
  [id: string]: true;
}

const DEFAULT_STATE: ReducerState = {};

export default function itemsReducer (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState {
  if (isFetchItemAction(action)) {
    return {
      ...state,
      [action.payload.id]: true,
    };
  }

  if (isSetItemAction(action)) {
    const newState = { ...state };
    delete newState[action.payload.item.id];
    return newState;
  }

  return state;
}

export function isItemLoading (state: ReducerState, id: number) {
  return state[id] || false;
}
