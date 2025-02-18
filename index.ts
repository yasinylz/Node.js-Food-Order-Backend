import express from 'express'
import mongoose from 'mongoose';
import { AdminRoute,VendorRoute } from './routes';
import bodyParser from 'body-parser';
import { MONGO_URI } from './config';
const  app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/admin',AdminRoute);
app.use('/vendor',VendorRoute);
mongoose.connect(MONGO_URI).then(()=>{console.log("Connected ")}).catch((err)=>console.log(err))

app.listen(8000,()=>{console.log('listening ..')})