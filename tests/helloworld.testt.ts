//individual tests

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

/***grouping tests */

describe("grouping tests ", () => {
  test("adds 2 +3 t be equal 5", () => {
    expect(2 + 3).toBe(5);
  });
});
