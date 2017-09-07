// Nothing in this file knows about React.
// Testing the updaters should be as simple as with Redux.
const makeInitialState = value => ({ value });

const setValue = value => state => Object.assign({}, state, { value });

export default props => {
  const { initialValue } = props;

  const initialState = makeInitialState(initialValue);

  const updaters = {
    setValue
  };

  return {
    initialState,
    updaters
  };
};
