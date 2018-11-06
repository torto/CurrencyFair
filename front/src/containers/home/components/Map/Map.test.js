import React from 'react'
import { mount } from 'enzyme'
import Map from './Map.js'

describe('Map Component', () => {
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
    width: 100,
    height: 200
  }
  it('Check Map Component is render', () => {
    const wrapper = mount(<Map {...props}/>)
    expect(wrapper.exists('svg')).toBeTruthy()
    expect(wrapper.exists('rect')).toBeTruthy()
    expect(wrapper.exists('.vx-geo')).toBeTruthy()
  })
})
