import { mock } from 'sinon'
import {expect} from 'chai'

import coutrysReducer, { loadCountrys } from './countrysReducer'

const handleSocket = () => {}

describe('Countries Reducer', () => {
	it('execute action', async () => {
		const returnValuesDispatch = {
      type: 'socket/COUNTRY_LOAD',
      event: 'originating-country',
      handle: handleSocket
    }
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		await  loadCountrys({handleSocket})(dispatch)
		dispatch.verify()
  })

  it('execute reducer', async () => {
		const values = {
			type: 'socket/COUNTRY',
			countrys: []
		}

		const valuesReturn = {
      countrys: []
		}
		expect(coutrysReducer(undefined, values)).to.be.deep.equal(valuesReturn)
  })
  it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(coutrysReducer({}, values)).to.be.deep.equal({})
  })
})
