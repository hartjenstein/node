// ----- testing API requests with supertest ----- 
const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

// describe groups tests together under a topic
describe('server', () => {
    describe('#get /', () => {
        it('Should return hello world response', (done) => {
        //supertest request
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page Not Found!'
                }); 
            })
            .end(done);
        });
    });

    describe('#get /users', () => { 

        it('Should return username and age', (done) => {
            //supertest request
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name:'nick',
                        age: '37'
                    }); 
                })
                .end(done);
            });
    });  
});