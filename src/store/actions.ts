import { Action, Dispatch } from 'redux';
import { Item } from '../types';
import { getItem as getItemFromAPI } from '../api';

export interface FetchItem extends Action {
  type: 'FETCH_ITEM';
  payload: {
    id: number;
  };
}

export function isFetchItemAction (action: Action): action is FetchItem {
  return action.type === 'FETCH_ITEM';
}

export interface SetItem extends Action {
  type: 'SET_ITEM';
  payload: {
    item: Item;
  };
}

export function isSetItemAction (action: Action): action is SetItem {
  return action.type === 'SET_ITEM';
}

export function fetchItem (id: number) {
  return async function (dispatch: Dispatch<FetchItem | SetItem>) {
    dispatch<FetchItem>({
      type: 'FETCH_ITEM',
      payload: {
        id,
      },
    });
    const item = await getItemFromAPI(id);
    dispatch<SetItem>({
      type: 'SET_ITEM',
      payload: {
        item,
      },
    });
  };
}
