import { mock } from 'sinon'

const { loadSocket } = require('./socketAction')

describe('loadSocket Action', () => {
	it('execute success', async () => {
		const axios = {
			get: mock('axios-get')
			.withArgs(`http://localhost:3001/api/loadSocket`)
			.resolves({})
		}
		await loadSocket({axios})()
		axios.get.verify()
  })
})
