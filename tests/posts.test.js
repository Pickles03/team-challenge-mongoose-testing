const request = require('supertest');
const app = require('../index');

describe('POST /create', () => {
  it('should create a post', async () => {
    const res = await request(app)
      .post('/create')
      .send({ title: 'Test Post', body: 'Content here' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });
});
