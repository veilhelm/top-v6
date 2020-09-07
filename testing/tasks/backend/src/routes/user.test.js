const req = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/user.model')

describe('user', () => {
  beforeEach(async () => {
    for(const collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({})
    }
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })

  it('should not create user when there is no email', async () => {
    const res = await req(app).post('/users/signup').send({ password: '12345' })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is required/i)
  })

  it('should not create user when if email is invalid', async () => {
    const res = await req(app).post('/users/signup').send({ email: 'test.com', password: '12345' })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is not valid/i)
  })

  it('should not create user when if email already exists', async () => {
    await User.create({ email: 'test@test.com', password: '12345' })
    const res = await req(app).post('/users/signup').send({ email: 'test@test.com', password: '12345' })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email already exists/i)
  })

  it('should create user correctly', async () => {
    const user = { email: 'test@test.com', password: '12345'}
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
  })

  it('should return error if user does not exits when signing in', async () => {
    const user = { email: 'test@test.com', password: '12345' }
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid/i)
  })

  it('should return error if incorrect when signing in', async () => {
    await User.create({ email: 'test@test.com', password: '12345' })
    const user = { email: 'test@test.com', password: '123456' }
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid/i)
  })

  it('should signin user correctly', async () => {
    await User.create({ email: 'test@test.com', password: '12345' })
    const user = { email: 'test@test.com', password: '12345' }
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
  })
})
