import * as supertest from 'supertest';
import { createApp } from '../../../src/app';

describe('healthcheck', () => {
  it('should return 200', async () => {
    // Arrange
    const app = createApp();

    // Act
    const res = await supertest(app).get('/healthcheck');

    // Assert
    expect(res.status).toBe(200);
  });
});
