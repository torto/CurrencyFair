import React from 'react';
import { mount } from 'enzyme';
import {expect as chaiExpect} from 'chai'
import {Home, mapStateToProps, mapDispatchToProps} from './index.js'

describe('Home Component ', () => {
  const initialState = {
    average: {
      amountBuy: 0,
      amountSell: 0
    },
    count: {
      count: 0
    },
    countrys: {
      countrys: []
    },
    lastMessage: {},
    today: {
      count: 0,
      average: {
        amountBuy: 0,
        amountSell: 0
      },
      countrys: []
    },
    loadCounter: jest.fn(),
    loadAverage: jest.fn(),
    loadLastMessage: jest.fn(),
    loadCountrys: jest.fn(),
    loadToday: jest.fn(),
    loadSocket: jest.fn()
  }


  let store,container

  beforeEach(() => {
    container = mount(<Home {...initialState} /> )
  })

  it('Execute Redux', () => {
    const dispatch = jest.fn()
    mapStateToProps(initialState)
    mapDispatchToProps(dispatch)
  })

  it('Check redux function is call', () => {
    chaiExpect(initialState.loadCounter.mock.calls.length).equal(2)
    chaiExpect(initialState.loadAverage.mock.calls.length).equal(2)
    chaiExpect(initialState.loadLastMessage.mock.calls.length).equal(2)
    chaiExpect(initialState.loadCountrys.mock.calls.length).equal(2)
    chaiExpect(initialState.loadToday.mock.calls.length).equal(2)
    chaiExpect(initialState.loadSocket.mock.calls.length).equal(2)
  })
  it('Check all components is present', () => {
    chaiExpect(container.find('AverageCard')).to.have.lengthOf(2)
    chaiExpect(container.find('MapCard')).to.have.lengthOf(2)
    chaiExpect(container.find('LastMessage')).to.have.lengthOf(1)
  })
  it('Check all components is present', () => {
    expect(container.html()).toContain('Country by Requests (All)')
    expect(container.html()).toContain('Country by Requests (Today)')
    expect(container.html()).toContain('Body the Last Request')
    expect(container.html()).toContain('Average Requests (All)')
    expect(container.html()).toContain('Average Requests (Today)')
  })
})
