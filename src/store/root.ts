import { combineReducers } from 'redux';
import * as stories from './stories';

export interface ReducerState {
  stories: stories.ReducerState;
}

export default combineReducers<ReducerState>({
  stories: stories.default,
});

export function getBestStoryIds (state: ReducerState): number[] {
  return stories.getBestStoryIds(state.stories);
}

export function getTopStoryIds (state: ReducerState): number[] {
  return stories.getTopStoryIds(state.stories);
}
