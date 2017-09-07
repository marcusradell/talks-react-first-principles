# talks-react-first-principles
We will go go from a plain connected React input field, and look at how we can write something more pure.

There will be a set of five transformations of the same code. Each transformation uses less React code, but at the same time stays true to the React principles.

At the end of the presentation, you should see that going frameworkless in React can be safe, and leave room for innovation.

*Note: we only have one value in our state object, and one state updater to keep code short.*
*The abstractions are built to handle multiple values and updaters.*

## Versions

### Mark 1
The initial plain React stateful component.
We start from here and move towards something more pure step-by-step.

### Mark 2
We break out some code outside the component, while still being in a single file.

### Mark 3
We create separate files for the model, and extract a small util. This is the last React-centric version before the big `React.Component` purge.

### Mark 4
Final form. High quality, and easy to write. We have now extracted away the statefulness.
But how do we combine state like Redux? Well, we can use Redux too! Or...

### Plus ultra
_A magic stream has been observed_
Plus ultra!
We use the Framework `planck-state`. We can now combine states as well as call actions from the outside with the help of `Observable` stream.

## Takeaways
Use what you have learned from React (and Redux). Then apply it outside of the library for your own special needs.

* You can use props outside of React.
* You can inject dependencies like actions outside of React, and thus bind functions in stateless views.
* You can write pure functions instead of `React.Component` methods.
* Reactiveness is great! Consider experimenting with `Observable` streams to achieve reusable components that define their own state and actions, while still being extendable.

## Reading notes
This codebase is presentation material, but I want the code-base and presentation to be accessible even after, which is why I've chosen to write this in markdown format mixed with the code.

Each version can be found in `src/components/` with their own `README.md` that you should read in order. You can view the components and play around with the code via `npm run storybook`.

*<3*

// @marcusnielsen