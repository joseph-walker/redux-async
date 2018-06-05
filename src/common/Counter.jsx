import React from 'react';

export function Counter(props) {
    function handleDelayChange(event) {
        props.onDelayChange(event.target.value);
    }

    function handleIncrementClick(event) {
        props.onIncrementClick();
    }

    return (
        <div>
            <h1>Count: { props.count }</h1>
            <input type="text" value={ props.delay } onChange={ handleDelayChange } />
            <button onClick={ handleIncrementClick }>Increment</button>
        </div>
    );
}