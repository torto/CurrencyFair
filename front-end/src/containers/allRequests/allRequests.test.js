import React from 'react';
import { shallow } from 'enzyme';
import {AllRequests, mapStateToProps, mapDispatchToProps} from './index.js'

describe('All Requests Component ', () => {
  const initialState = {
      list: {
        data:[{
          userId: "134256",
          currencyFrom: "EUR",
          currencyTo: "GBP",
          amountSell: 1000,
          amountBuy: 747.1,
          rate: 0.7471,
          timePlaced: "04-NOV-18 10:27:44",
          originatingCountry: "AR"
        }]
      },
      getList: jest.fn()
  }

  let store,container

  beforeEach(() => {
    container = shallow(<AllRequests {...initialState} /> )
  })

  it('Execute Redux', () => {
    const dispatch = jest.fn()
    mapStateToProps(initialState)
    mapDispatchToProps(dispatch)
  })

  it('Check redux function is call', () => {
    expect(initialState.getList.mock.calls.length).toBe(2)
  })
  it('Check card is create and Title', () => {
    expect(container.exists('Card')).toEqual(true)
    expect(container.find('Card').html()).toContain('List All Requests')
  })
  it('Check table is create and check coluns header', () => {
    expect(container.exists('BootstrapTableContainer')).toEqual(true)
    const table = container.find('BootstrapTableContainer').html()
    expect(table).toContain('User ID')
    expect(table).toContain('Originating Country')
    expect(table).toContain('Currency From')
    expect(table).toContain('Currency To')
    expect(table).toContain('Amount Buy')
    expect(table).toContain('Currency Sell')
    expect(table).toContain('Rate')
    expect(table).toContain('Time Placed')
  })
  it('Check values in the table', () => {
    expect(container.exists('BootstrapTableContainer')).toEqual(true)
    const table = container.find('BootstrapTableContainer').html()
    expect(table).toContain('134256')
    expect(table).toContain('EUR')
    expect(table).toContain('GBP')
    expect(table).toContain('1000')
    expect(table).toContain('747.1')
    expect(table).toContain('0.7471')
    expect(table).toContain('04-NOV-18 10:27:44')
    expect(table).toContain('AR')
  })
})
