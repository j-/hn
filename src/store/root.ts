import { combineReducers } from 'redux';
import * as stories from './stories';

export interface ReducerState {
  stories: stories.ReducerState;
}

export default combineReducers<ReducerState>({
  stories: stories.default,
});

export function getStoryIds (state: ReducerState): number[] {
  return stories.getStoryIds(state.stories);
}
