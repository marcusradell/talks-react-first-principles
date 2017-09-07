import makeModel from "./model";

test("model.initialState", () => {
  const model = makeModel({ initialValue: "foo" });

  expect(model.initialState).toEqual({
    value: "foo"
  });
});

test("model.setValue()", () => {
  const model = makeModel({ initialValue: "foo" });

  const result = model.updaters.setValue("bar")(model.initialState);

  expect(result).toEqual({ value: "bar" });
});
