import { Action } from 'redux';
import { isSetTopStoryIdsAction } from './actions';

export type ReducerState = number[];

const DEFAULT_STATE: ReducerState = [];

export default function topStoriesReducer (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState {
  if (isSetTopStoryIdsAction(action)) {
    return action.payload.storyIds;
  }

  return state;
}

export function getTopStoryIds (state: ReducerState): number[] {
  return state;
}
