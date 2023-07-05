import store from "../components/Redux/store";

describe('Store', () => {
  test('store matches the snapshot', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
