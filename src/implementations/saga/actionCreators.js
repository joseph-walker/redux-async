import { delay } from 'redux-saga';
import { takeEvery, put, select } from 'redux-saga/effects';

export function startIncrement() {
    return {
        type: 'startIncrement'
    };
}

export function doIncrement() {
    return {
        type: 'doIncrement'
    };
}

export function changeDelay(newDelay) {
    return {
        type: 'changeDelay',
        newDelay
    };
}

export function * startIncrementSaga() {
    yield takeEvery('startIncrement', doIncrementSaga);
}

function * doIncrementSaga() {
    const maybeDelay = yield select(state => state.delay);

    yield delay(maybeDelay || 0);
    yield put(doIncrement());
}