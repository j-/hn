import {
  createStore as createReduxStore,
  applyMiddleware,
  Middleware,
  GenericStoreEnhancer,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './root';

export default function createStore () {
  const middleware: Middleware[] = [
    ReduxThunk,
  ];
  const enhancers: GenericStoreEnhancer[] = [];
  const store = createReduxStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
  ));
  return store;
}
