import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv'
import dbConnect from './db/conn.js'

dotenv.config({path: './config.env'})

const CONNECTION_URL = process.env.DATABASE;
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use('/auth',authRoutes)
//connecting express to mongoose 
dbConnect(CONNECTION_URL)
app.listen(PORT,()=> console.log(`port running on ${PORT}`))

