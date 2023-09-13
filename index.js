const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes');
const app = express()

dotenv.config();
const connectToDb = () => {
    mongoose.set("strictQuery", false);
    return mongoose
        .connect(process.env.MONGO_URI, {
            bufferCommands: false,
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
};

app.use(express.json());
app.use(userRouter)


app.listen(3000, async () => {
    console.log(`Server is running on port 3000`);
    await connectToDb()
})