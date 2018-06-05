import * as React from 'react';
import { render } from 'react-dom';

import { Counter } from './../../common/Counter';
import { changeDelay, startIncrement } from './actionCreators';
import { store } from './store';

function renderApp() {
    const state = store.getState();

    function onDelayChange(newDelay) {
        store.dispatch(changeDelay(newDelay));
    }

    function onIncrementClick() {
        store.dispatch(startIncrement());
    }

    const app = (
        <Counter
            count={state.count}
            delay={state.delay}
            onDelayChange={onDelayChange}
            onIncrementClick={onIncrementClick} />
    );

    render(app, document.getElementById('root'));
}

store.subscribe(renderApp);

renderApp();