# Input Plus Ultra
This version uses `@linasmatkasse/planck-state` to compose planck-state input components into a form without lifting state upwards.

_This is just a demonstration meant to inspire innovation, not adoption of another existing framework._

## Storybook
When you open the storybook, make sure to watch the console output to see the entire form state. The state stream is usually used to send the state to the server.

You will also see setValue actions from the first input field. This is mostly used to debug or log events. But it can also be used to pair an action with the latest emitted state.

## Takeaways
You could explore doing a Redux connector adapter.
Try borrowing the `combineReducer` idea, and combine `updaters` and `initialState` upwards with vanilla React.

You don't need the frameworks to think like React, Redux, or planck-state to do good solutions that fit your own set of problems.

`props` and `components` are great concepts to extract from React.
`Immutability` and `reducers` are great concepts found in many places outside of Redux.

Now go write some code!
