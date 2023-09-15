const mongoose = require('mongoose');
const dotenv = require('dotenv');
const server = require('./server')
dotenv.config();

const connectToDb = () => {
    return mongoose
        .connect(process.env.MONGO_URI, {bufferCommands: true})
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
};

server.listen(3000, async () => {
    console.log("Server is listening on port 3000")
    await connectToDb()
})

