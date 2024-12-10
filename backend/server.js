import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './Config/db.js';
const port=process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

connectDB();

const app=express();

app.use('api/users',userRoutes)

app.get('/',(req,res)=>res.send("server is ready"))

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`server is started on http://127.0.0.1:${port}`));