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

export function runIncrement(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(true);
        }, delay || 0)
    });
}