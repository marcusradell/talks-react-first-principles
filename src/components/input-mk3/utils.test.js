import { makeActions } from "./utils";

test("makeActions() empty data", () => {
  const setState = () => {};
  const updaters = {};

  const actions = makeActions(setState)(updaters);

  expect(actions).toEqual({});
});

test("makeActions() valid data", done => {
  const setState = updaterWithEvent => {
    const initialState = { value: "initial value" };
    expect(updaterWithEvent(initialState)).toEqual({ value: "event value" });
    done();
  };

  const setValue = value => state => Object.assign({}, state, { value });

  const updaters = {
    setValue
  };

  const actions = makeActions(setState)(updaters);

  actions.setValue("event value");
});
