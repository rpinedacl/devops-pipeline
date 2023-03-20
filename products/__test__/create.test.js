import app from '../src/app';
import supertest from 'supertest';

describe('Create route', () => {
	it('should create a new product', async () => {
		const res = await supertest(app).post('/products').send({
			name: 'polera'
		});
		expect(res.statusCode).toEqual(201);
		expect(res.body.name).toBe('polera');
	});
});