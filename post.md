# A Comparison of Redux Async Libraries

## Foreword
You can find the code for this exercize at [this GitHub repository](https://github.com/joseph-walker/redux-async) -- I would encourage you to take a look at each implemenation as I go over each library. I'll post some code snippets along the way, but not the entire application code for each sample so as not to blow out the article's length.

This article assumes at least a basic familiarity with React / Redux and its parlance; components, action creators, actions, reducers and so on.

## Some Background

Within the Javascript world, React is king. But React cannot rule alone; React does not handle application state. Sure, React components can have a local state, and if you're particularly masochistic you could build an application around component states. But for those of us who value our sanity, we need another solution.

Enter Redux.

Redux is a state management library -- and while it's not _specifically_ built for React, the two go together like a king and his crown.

### Redux and its Cousin Elm

Before Redux, there was Flux. When Flux was introduced by Facebook and people started using it they were like "WTF is this", so Dan Abramov created Redux by taking cues from Elm -- a purely functional programming language built specifically for web development derived from the syntax of Haskell. That relationship is important, because Elm values simplicity. Elm in turn informs the core application loop of Redux: Views emit actions, actions are applied to reducers, and reducers update views.

In striving for simplicity though, Redux introduces a slight problem -- it doesn't provide an elegant way to handle asynchronous actions out of the box. Technically speaking, Redux doesn't care wether actions are synchronous or not, but organizing asynchronous flows using Redux alone can lead to big piles of spaghetti.

### A Community Solution

Luckily, Redux has the ability to augment its functionality using community-created middlewares. The community has approached solving the problem of async flows in Redux and has created several async-middlewares for Redux.

A few of these libraries have floated to the top -- Redux-Thunk, Redux-Saga, and Redux-Loop -- and in this article we'll go through and experiment with each of them to analyze the strengths and weaknesses of each.

---

## The Setup

I'll be going over `redux-thunk`, `redux-loop`, and `redux-saga` in that order. I'll be using them to control a React application.

I chose to create a simple asynchronous counter to minimize the amount of React code that gets in the way of seeing the differences in each library:

```
// src/common/Counter.jsx

export function Counter(props) {
    function handleDelayChange(event) { ... }
    function handleIncrementClick(event) { ... }

    return (
        <div>
            <h1>Count: { props.count }</h1>
            <input
                type="text"
                value={ props.delay }
                onChange={ handleDelayChange } />
            <button
                onClick={ handleIncrementClick }>
                Increment
            </button>
        </div>
    );
}
```

Our component is completely controlled by its props and has no internal state. For each library, we'll connect it to Redux in the same way:

```
// src/implementations/{library}/index.js

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
```

A wrapper component will connect our counter to the Redux state. I chose not to use `react-redux` in this example because it's not really needed, and would just get in the way of analyzing the real differences between our async libraries.

That's really the only setup we need, so let's get started...

### Redux-Thunk
__DRAFT__

### Redux-Loop
__DRAFT__

### Redux-Saga
__DRAFT__

## Analysis
__DRAFT__

## Conclusion
__DRAFT__