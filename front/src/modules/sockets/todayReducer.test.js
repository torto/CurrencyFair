import { mock } from 'sinon'
import {expect} from 'chai'

import todayReducer, { loadToday } from './todayReducer'

const handleSocket = () => {}

describe('LastMessage Reducer', () => {
	it('execute action', async () => {
		const returnValuesDispatch = {
      type: 'socket/TODAY_LOAD',
      event: 'today',
      handle: handleSocket
    }
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		await loadToday({handleSocket})(dispatch)
		dispatch.verify()
  })

  it('execute reducer', async () => {
		const values = {
			type: 'socket/TODAY',
			today: {
        count: 0,
        average: {
          amountBuy: 0,
          amountSell: 0
        },
        countrys: []
      }
		}

		const valuesReturn = {
      count: 0,
      average: {
        amountBuy: 0,
        amountSell: 0
      },
      countrys: []
    }

		expect(todayReducer(undefined, values)).to.be.deep.equal(valuesReturn)
  })
  it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(todayReducer({}, values)).to.be.deep.equal({})
  })
})
