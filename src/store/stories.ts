import { combineReducers } from 'redux';
import * as best from './stories-best';
import * as top from './stories-top';

export interface ReducerState {
  best: best.ReducerState;
  top: top.ReducerState;
}

export default combineReducers<ReducerState>({
  best: best.default,
  top: top.default,
});

export function getBestStoryIds (state: ReducerState) {
  return best.getBestStoryIds(state.best);
}

export function getTopStoryIds (state: ReducerState) {
  return top.getTopStoryIds(state.top);
}
