import * as React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Top } from '.';

const mockStore = configureStore();
let store: any;
let wrapper: any;

beforeEach(() => {
  store = mockStore({});
  store.dispatch = jest.fn();
  wrapper = shallow(<Top store={store}>bar</Top>);
});

test('should map load to dispatch LOAD_TOP_PAGE action', () => {
  wrapper.props().load();

  expect(store.dispatch).toHaveBeenCalledWith({ type: 'LOAD_TOP_PAGE' });
});
