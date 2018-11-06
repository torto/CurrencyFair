import { mock } from 'sinon'
import {expect} from 'chai'

import counterReducer, { loadCounter } from './counterReducer'

const handleSocket = () => {}

describe('Counter Reducer', () => {
	it('execute action', async () => {
		const returnValuesDispatch = {
      type: 'socket/COUNTER_LOAD',
      event: 'counter',
      handle: handleSocket
    }
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		await  loadCounter({handleSocket})(dispatch)
		dispatch.verify()
  })

  it('execute reducer', async () => {
		const values = {
			type: 'socket/COUNTER',
			count: 1
		}

		const valuesReturn = {
      count: 1
		}
		expect(counterReducer(undefined, values)).to.be.deep.equal(valuesReturn)
  })
  it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(counterReducer({}, values)).to.be.deep.equal({})
  })
})
