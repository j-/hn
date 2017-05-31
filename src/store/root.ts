import { combineReducers } from 'redux';
import * as entities from './entities';
import * as stories from './stories';

export interface ReducerState {
  entities: entities.ReducerState;
  stories: stories.ReducerState;
}

export default combineReducers<ReducerState>({
  entities: entities.default,
  stories: stories.default,
});

export function getItemById (state: ReducerState, id: number) {
  return entities.getItemById(state.entities, id);
}

export function getBestStoryIds (state: ReducerState) {
  return stories.getBestStoryIds(state.stories);
}

export function getTopStoryIds (state: ReducerState) {
  return stories.getTopStoryIds(state.stories);
}
