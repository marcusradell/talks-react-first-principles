# Input Mark 2
Same as the first, but we have broken out an `initialState` and a set of `updaters`.

We also began creating a utility called `makeActions` where we bind all pure `updaters` to React's `this.setState`, getting a set of effectful `actions` back.
