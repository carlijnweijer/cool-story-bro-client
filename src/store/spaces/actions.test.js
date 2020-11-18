import { FETCH_SPACES_SUCCESS, fetchSpacesSuccess } from "./actions";

describe("#fetchSpacesSuccess", () => {
  describe("if given an array of spaces", () => {
    const spaces = [{}, {}];
    const expected = {
      type: FETCH_SPACES_SUCCESS,
      payload: spaces,
    };

    test("should return an action object", () => {
      // test data simulating homepages
      // build action we expect to get back

      // call function
      const action = fetchSpacesSuccess(spaces);
      // do assertion on function return
      expect(action).toEqual(expected);
    });

    // 1. test =>
    //toHaveLength
    test("action.payload should have the same length as the argument given", () => {
      const action = fetchSpacesSuccess(spaces);
      expect(action.payload).toHaveLength(spaces.length);
    });
  });
});
