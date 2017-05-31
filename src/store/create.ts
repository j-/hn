import {
  createStore as createReduxStore,
  applyMiddleware,
  Middleware,
  GenericStoreEnhancer,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './root';

const LOCAL_STORAGE_KEY: string = 'hn-state';

const getState = () => {
  try {
    const stringified = localStorage.getItem(LOCAL_STORAGE_KEY);
    return JSON.parse(stringified || '');
  } catch (err) {
    return undefined;
  }
};

const setState = (state: {}) => {
  try {
    const stringified = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
  } catch (err) {
    // Ignore
  }
};

export default function createStore () {
  const middleware: Middleware[] = [
    ReduxThunk,
  ];
  const enhancers: GenericStoreEnhancer[] = [];
  const initialState = getState();
  const store = createReduxStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
  ));
  store.subscribe(() => setState(store.getState()));
  return store;
}
