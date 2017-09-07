/* eslint-disable import/prefer-default-export */
export const makeActions = setState => updaters =>
  /* eslint-enable */
  Object.entries(updaters).reduce(
    (acc, [key, value]) =>
      Object.assign({}, acc, { [key]: event => setState(value(event)) }),
    {}
  );
