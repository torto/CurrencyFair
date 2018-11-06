import React from 'react';
import { shallow } from 'enzyme';
import LastMessage from './LastMessage.js'

describe('LastMessage Component', () => {
  const props = {
    title: 'Title',
    lastMessage: {
      test: 'test value'
    }
  }
  it('Check LastMessage Component is render', () => {
    const wrapper = shallow(<LastMessage {...props}/>);
    expect(wrapper.exists('Card')).toBeTruthy();
  });
  it('Check values insert by props', () => {
    const wrapper = shallow(<LastMessage {...props}/>)
    expect(wrapper.html()).toContain(props.title)
    expect(wrapper.find('pre').text()).toContain(JSON.stringify(props.lastMessage, null, 2));
  });
})
