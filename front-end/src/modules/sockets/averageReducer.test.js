import { mock } from 'sinon'
import {expect} from 'chai'

import averageReducer, { loadAverage } from './averageReducer'

const handleSocket = () => {}

describe('Average Reducer', () => {
	it('execute action', async () => {
		const returnValuesDispatch = {
      type: 'socket/AVERAGE_LOAD',
      event: 'average',
      handle: handleSocket
    }
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		await  loadAverage({handleSocket})(dispatch)
		dispatch.verify()
  })

  it('execute reducer', async () => {
		const values = {
			type: 'socket/AVERAGE',
			average: {
        amountBuy: 1,
        amountSell: 2
      }
		}

		const valuesReturn = {
      amountBuy: 1,
      amountSell: 2
		}
		expect(averageReducer(undefined, values)).to.be.deep.equal(valuesReturn)
  })
  it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(averageReducer({}, values)).to.be.deep.equal({})
  })
})
