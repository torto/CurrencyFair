import { mock } from 'sinon'

const { getList } = require('./listAction')

const data = [
	{
		language: 'a'
	}
]

describe('getList Action', () => {
	it('execute success', async () => {
		const returnValuesDispatch = {
      type: 'request/LIST_SUCESS',
      payload: {
				data
			}
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		const axios = {
			get: mock('axios-get')
			.withArgs(`http://localhost:3001/api/list`)
			.resolves({data})
		}
		await  getList({axios})(dispatch)
		axios.get.verify()
		dispatch.verify()
  })
	it('execute error', async () => {

		const returnValuesDispatch = {
      type: 'request/LIST_ERROR',
      payload: {
				data: 'error test'
			}
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		const axios = {
			get: mock('axios-get')
			.withArgs(`http://localhost:3001/api/list`)
			.rejects('error test')
		}
		await  getList({axios})(dispatch)
		axios.get.verify()
		dispatch.verify()
  })
})
