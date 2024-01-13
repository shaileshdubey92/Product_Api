import express from 'express'
import { config } from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './router/user.js'
import {postRouter} from './router/product.js'
import bodyParser from 'express'

const app = express();

//creating config file

config({
    path:'.env'
});
app.use(bodyParser.json());

//userRouter
app.use('/api',userRouter);

//postRouter
app.use('/api',postRouter);


// DB Connection
mongoose.connect(process.env.MONGO_URL,{
    dbName:"Product_Api"
}).then(()=>console.log("MongoDB is Connected..!"))

// Server Setup
const port = process.env.port;
app.listen(port,()=>console.log(`Server is running port${port}`)); 