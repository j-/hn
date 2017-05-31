import { Action } from 'redux';
import { Item } from '../types';
import { isSetItemAction } from './actions';

export interface ReducerState {
  [id: string]: Item;
}

const DEFAULT_STATE: ReducerState = {};

export default function itemsReducer (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState {
  if (isSetItemAction(action)) {
    return {
      ...state,
      [action.payload.item.id]: action.payload.item,
    };
  }

  return state;
};

export function getItemById (state: ReducerState, id: number) {
  return state[id] || null;
}
