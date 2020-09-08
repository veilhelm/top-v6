const req = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

describe('tasks', () => {
  let token;

  beforeEach(async () => {
    for(const collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({})
    }

    const user = { email: 'test@test.com', password: '12345' }
    const auth = await req(app).post('/users/signup').send(user)
    token = auth.body.token;
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })

  it('should not create task if user is not authenticated', async () => {
    const res = await req(app).post('/tasks/').send({ name: 'task 1' })

    expect(res.statusCode).toBe(401)
    expect(res.body.message).toMatch(/session has expired/i)
  })

  it('should not create task if token is invalid', async () => {
    const res = await req(app)
      .post('/tasks')
      .send({ name: 'task 1'})
      .set('Authorization', 'Bearer ')
      .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(401)
    expect(res.body.message).toMatch(/session has expired/i)
  })

  it('should create task when user is authenticated', async () => {
    const res = await req(app)
      .post('/tasks')
      .send({ name: 'task 1' })
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.name).toMatch('task 1')
    expect(res.body.done).toBeFalsy()
    // expect(res.body.user.email).toMatch(user.email)
  })

  it('should not create task if user is authenticated but there is no name', async () => {
    const res = await req(app)
      .post('/tasks')
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(400)
  })
})
