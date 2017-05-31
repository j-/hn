import { combineReducers } from 'redux';
import * as items from './entities-items';

export interface ReducerState {
  items: items.ReducerState;
}

export default combineReducers<ReducerState>({
  items: items.default,
});

export function getItemById (state: ReducerState, id: number) {
  return items.getItemById(state.items, id);
}
