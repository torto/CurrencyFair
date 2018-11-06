import React from 'react';
import { shallow } from 'enzyme';
import AverageCard from './AverageCard.js'

describe('AverageCard Component', () => {
  const props = {
    amountBuy: 10,
    amountSell: 20,
    count: 1,
    title: 'Title Test',
    countrys: [1,2,3]
  }
  it('Check AverageCard Component is render and TitlesElements is correct', () => {
    const wrapper = shallow(<AverageCard {...props}/>);
    expect(wrapper.exists('Card')).toBeTruthy();
    expect(wrapper.html()).toContain('Total Requests');
    expect(wrapper.html()).toContain('Amount Sell');
    expect(wrapper.html()).toContain('Amount Buy');
    expect(wrapper.html()).toContain('Number of Countrys');
  })

  it('Check values insert by props', () => {
    const wrapper = shallow(<AverageCard {...props}/>);
    expect(wrapper.html()).toContain(props.amountBuy);
    expect(wrapper.html()).toContain(props.amountSell);
    expect(wrapper.html()).toContain(props.count);
    expect(wrapper.html()).toContain(props.title);
    expect(wrapper.html()).toContain(props.countrys.length);
  })
  it('Check values insert by props with NaN values', () => {
    props.amountSell = 'asdf'
    props.amountBuy = 'asdf'
    const wrapper = shallow(<AverageCard {...props}/>);
    expect(wrapper.html()).toContain('0.00');
    expect(wrapper.html()).toContain(props.count);
    expect(wrapper.html()).toContain(props.title);
    expect(wrapper.html()).toContain(props.countrys.length);
  })
})
