const request = require('supertest')("http://127.0.0.1:3001");
const nock = require('nock');
var expect = require('chai').expect;

describe('test server', function () {
    it('respond with Hello world!', function (done) {
		
		nock('http://127.0.0.1:3001')
		.get('/')
		.reply(200, {
			"status": 200,
			"message": "Home world!"
		});
		nock('http://127.0.0.1:3001').get('/').reply(200, 'Home world!');
		
		request.get('/').end(function (err, res) {
				expect(res.body.status).to.equal(200);
				expect(res.body.message).to.equal("Home world!");
				done();
		});
    });
});
