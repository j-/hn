import { Action, Dispatch } from 'redux';
import { Item } from '../types';
import { getItem, getBestStoryIds } from '../api';

export interface SetItem extends Action {
  type: 'SET_ITEM';
  payload: {
    item: Item;
  };
}

export function isSetItemAction (action: Action): action is SetItem {
  return action.type === 'SET_ITEM';
}

export interface FetchItem extends Action {
  type: 'FETCH_ITEM';
  payload: {
    id: number;
  };
}

export function isFetchItemAction (action: Action): action is FetchItem {
  return action.type === 'FETCH_ITEM';
}

export function fetchItem (id: number) {
  return async function (dispatch: Dispatch<FetchItem | SetItem>) {
    dispatch<FetchItem>({
      type: 'FETCH_ITEM',
      payload: {
        id,
      },
    });
    const item = await getItem(id);
    dispatch<SetItem>({
      type: 'SET_ITEM',
      payload: {
        item,
      },
    });
  };
}

export interface SetBestStoryIds extends Action {
  type: 'SET_BEST_STORY_IDS';
  payload: {
    storyIds: number[];
  };
}

export function isSetBestStoryIdsAction (action: Action): action is SetBestStoryIds {
  return action.type === 'SET_BEST_STORY_IDS';
}

export interface FetchBestStoryIds extends Action {
  type: 'FETCH_BEST_STORY_IDS';
}

export function isFetchBestStoryIdsAction (action: Action): action is FetchBestStoryIds {
  return action.type === 'FETCH_BEST_STORY_IDS';
}

export function fetchBestStories () {
  return async function (dispatch: Dispatch<FetchBestStoryIds | SetBestStoryIds>) {
    dispatch<FetchBestStoryIds>({
      type: 'FETCH_BEST_STORY_IDS',
    });
    const storyIds = await getBestStoryIds();
    dispatch<SetBestStoryIds>({
      type: 'SET_BEST_STORY_IDS',
      payload: {
        storyIds,
      },
    });
  };
}
