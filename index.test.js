const mongoose = require('mongoose')
const dotenv = require('dotenv');
const request = require('supertest');
const server = require('./server')

dotenv.config();
beforeAll(async () => {
    return mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
})

afterAll(async () => {
    return await mongoose.disconnect()
})

describe('CRUD API', () => {
    let id;

    it('should create a new person', async () => {
        const res = await request(server)
            .post('/api')
            .send({
                "name": "Madders",
                "age": 40,
                "email": "topballer@spurs.eu",
                "profession": "Dead ball specialist",
                "hobbies": ["Basketball", "Playing FIFA", "Playing Chess", "Ethical Hacking"]
            });
        expect(res.statusCode).toEqual(201);
        id = res.body.userID;
    });

    it('should get a person by ID', async () => {
        const res = await request(server)
            .get(`/api/${id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.userID).toEqual(id);
    });

    it('should update a person by ID', async () => {
        const res = await request(server)
            .put(`/api/${id}`)
            .send({
                "name": "Madders",
                "age": 40,
                "email": "topballer@spurs.eu",
                "profession": "Dead ball specialist",
                "hobbies": ["Basketball", "Playing FIFA", "Playing Chess", "Ethical Hacking"]
            });
        expect(res.statusCode).toEqual(200);
        expect(typeof res.body).toEqual("object");
    });

    it('should delete a person by ID', async () => {
        const res = await request(server)
            .delete(`/api/${id}`);
        expect(res.statusCode).toEqual(200);
    });
});