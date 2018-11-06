import { mock } from 'sinon'
import {expect} from 'chai'

import lastMessageReducer, { loadLastMessage } from './lastMessageReducer'

const handleSocket = () => {}

describe('LastMessage Reducer', () => {
	it('execute action', async () => {
		const returnValuesDispatch = {
      type: 'socket/LAST_MESSAGE_LOAD',
      event: 'last-message',
      handle: handleSocket
    }
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		await loadLastMessage({handleSocket})(dispatch)
		dispatch.verify()
  })

  it('execute reducer', async () => {
		const values = {
			type: 'socket/LAST_MESSAGE',
			lastMessage: {a: 1, b: 2}
		}

		const valuesReturn = {a: 1, b: 2}

		expect(lastMessageReducer(undefined, values)).to.be.deep.equal(valuesReturn)
  })
  it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(lastMessageReducer({}, values)).to.be.deep.equal({})
  })
})
