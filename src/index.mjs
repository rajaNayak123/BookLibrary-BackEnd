import express from 'express';
import mongoose from 'mongoose';
const app = express();
import route from './routes/route.mjs';
app.use(express.json());

mongoose.connect('mongodb+srv://nayakraja151:helloMongoDB@cluster0.xzcz0ry.mongodb.net/')
app.use('/', route)
app.listen(8000, () => {
    console.log('server starting on port', 8000);
})