import { createStore } from 'redux';
import { install as installReduxLoop } from 'redux-loop';

import { reducer } from './reducer';

export const store = createStore(
    reducer,
    installReduxLoop()
);