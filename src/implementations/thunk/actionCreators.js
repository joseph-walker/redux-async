export function startIncrement() {
    return function(dispatch, getState) {
        dispatch({
            type: 'startIncrement'
        });

        setTimeout(function() {
            dispatch(doIncrement());
        }, getState().delay || 0);
    }
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