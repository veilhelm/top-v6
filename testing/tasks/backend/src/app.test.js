const req = require('supertest')
const mongoose = require('mongoose')
const app = require('./app')

describe('app', () => {
  beforeEach(async () => {
    for(const collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({})
    }
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })

  it('should GET / with success code', async () => {
    const res = await req(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.text).toMatch(/hello world/i)
  })
})
