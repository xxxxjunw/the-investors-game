import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import '../../../app/javascript/helpers/initFA';

import { loadState, saveState } from '../store/localStorage';

import App from './App';
import Main from './Main';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import { fetchAllTicks } from '../actions/tick_actions';
import moment from 'moment-timezone';
import throttle from 'lodash/throttle';

const Root = ({ store }) => (
  <Provider store={store}>
    <Main>
      <App />
    </Main>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  moment.tz.setDefault('America/New_York');
  const preloadedState = loadState();
  const store = configureStore(preloadedState);
  store.subscribe(
    throttle(() => {
      saveState({
        transactions: store.getState().transactions,
      });
    }, 20000)
  );
  window.fetchAllTicks = fetchAllTicks;
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.body.appendChild(document.createElement('div')));
});
