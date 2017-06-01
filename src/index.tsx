import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import createStore from './store/create';
import { Provider } from 'react-redux';
import { fetchTopStories } from './store/actions';

const store = createStore();

store.dispatch(
  fetchTopStories(0, Infinity)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

// App is no longer loading
const appLoading = document.getElementById('app-loading');
if (appLoading) {
  appLoading.remove();
}
