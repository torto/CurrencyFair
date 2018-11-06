import { mock } from 'sinon'
import { expect } from 'chai'

const listReducer = require('./listReducer')

describe('List Reducer', () => {
	it('execute success', async () => {
		const values = {
			type: 'request/LIST_SUCESS',
			payload: {
				data: ['1','2']
			}
		}

		const valuesReturn = {
			data: values.payload.data,
		}
		expect(listReducer.default (undefined, values)).to.be.deep.equal(valuesReturn)
  })

	it('execute error', async () => {
		const values = {
			type: 'request/LIST_ERROR',
			data: ['1','2']
		}

		const valuesReturn = {
			error: values.data
		}
		expect(listReducer.default (null, values)).to.be.deep.equal(valuesReturn)
  })
	it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(listReducer.default ({}, values)).to.be.deep.equal({})
  })
})
