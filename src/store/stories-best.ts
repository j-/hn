import { Action } from 'redux';
import { isSetBestStoryIdsAction } from './actions';

export type ReducerState = number[];

const DEFAULT_STATE: ReducerState = [];

export default function bestStoriesReducer (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState {
  if (isSetBestStoryIdsAction(action)) {
    return action.payload.storyIds;
  }

  return state;
}

export function getBestStoryIds (state: ReducerState): number[] {
  return state;
}
