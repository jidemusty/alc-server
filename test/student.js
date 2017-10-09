import 'babel-polyfill';
import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../start';
import Student from '../models/Student';

chai.use(chaiHttp);

let should = chai.should();

describe('/GET students', () => {
    it('it should get all students', (done) => {
        chai.request(server)
            .get('/api/students')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
            done();
            });
    });
});

