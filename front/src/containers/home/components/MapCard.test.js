import React from 'react'
import { shallow } from 'enzyme'
import MapCard from './MapCard.js'

describe('MapCard Component', () => {
  const props = {
    countrys: [
      {
        key: 'BR',
        value: 12
      },
      {
        key: 'AR',
        value: 100
      }
    ],
    title: 'test title',
    width: 100,
    height: 200
  }
  it('Check MapCard Component is render', () => {
    const wrapper = shallow(<MapCard {...props}/>)
    expect(wrapper.exists('Card')).toBeTruthy()
    expect(wrapper.exists('Map')).toBeTruthy()
    expect(wrapper.exists('.list-group')).toBeTruthy()
  })
  it('Check MapCard Component title and itens list', () => {
    const wrapper = shallow(<MapCard {...props}/>)
    expect(wrapper.find('h5').text()).toBe(props.title)
    const li = wrapper.find('li').get(0).props.children
    expect(li).toContain('Brazil')
    expect(li[1].props.children).toBe(props.countrys[0].value)
  })
  it('Check itens list empty', () => {
    props.countrys = []
    const wrapper = shallow(<MapCard {...props}/>)
    expect(wrapper.find('li').html()).toContain('No Values')
  })
})
