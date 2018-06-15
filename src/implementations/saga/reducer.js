const emptyState = {
    count: 0,
    delay: '500'
};

export function reducer(state = emptyState, action) {
    switch(action.type) {
        case 'changeDelay':
            return Object.assign({}, state, { delay: action.newDelay });
        case 'doIncrement':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'startIncrement':
            return state;
        default:
            return state;
    }
}