import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js'

describe('Card Component', () => {
  it('Check Card Component is render', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.exists('.card')).toBeTruthy();
    expect(wrapper.exists('.card-body')).toBeTruthy();
    expect(wrapper.exists('h1')).toBeFalsy();
  });
  it('Check Card Component is render with title', () => {
    const stringTitle = 'Test Title'
    const wrapper = shallow(<Card title={stringTitle}/>);
    expect(wrapper.exists('.card-title')).toBeTruthy();
    expect(wrapper.find('.card-title').text()).toBe(stringTitle);
  });
  it('Check Card Component is render with children', () => {
    const wrapper = shallow(<Card><h1>Test</h1></Card>);
    expect(wrapper.exists('h1')).toBeTruthy();
  });
})
