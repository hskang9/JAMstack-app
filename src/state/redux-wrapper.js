import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

import { SingleModalProvider } from '../contexts/SingleModalContext';

const createStore = () => reduxCreateStore(rootReducer);
export default ({ element }) => (
  <SingleModalProvider>
    <Provider store={createStore()}>{element}</Provider>
  </SingleModalProvider>
);
