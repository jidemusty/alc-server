import 'babel-polyfill';
import mongoose from 'mongoose';
import chai from 'chai';
import superTest from 'supertest';
// import chaiHttp from 'chai-http';

import server from '../start';
import Student from '../models/Student';

// chai.use(chaiHttp);

let should = chai.should();
let expect = chai.expect;

describe('/GET students', () => {
    it('returns an array of students', (done) => {
        superTest(server)
            .get('/api/students')
            .expect('Content-Type', 'application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(2);
                done(); 
            });

    });
});

describe('Get a student by id', () => {
    
});
  