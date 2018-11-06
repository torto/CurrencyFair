import React from 'react';
import { shallow } from 'enzyme';
import App from './index.js'

it('Check All Requests menu link', () => {
  const wrapper = shallow(<App />);
  const welcome = <h6>All Requests</h6>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
it('Check main exist', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('.container')).toEqual(true);
  expect(wrapper.exists('main')).toEqual(true);
});
