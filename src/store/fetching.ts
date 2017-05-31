import { combineReducers } from 'redux';
import * as items from './fetching-items';

export interface ReducerState {
  items: items.ReducerState;
}

export default combineReducers<ReducerState>({
  items: items.default,
});

export function isItemLoading (state: ReducerState, id: number) {
  return items.isItemLoading(state.items, id);
}
