import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const CONNECTION_URL = 'mongodb+srv://abhishek5nayak22:kJsepI373AwdFb0G@cluster0.mu6bock.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 9090;
const app = express();
app.use('/posts',postRoutes)
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());

//connecting express to mongoose 
mongoose.connect(CONNECTION_URL,{useNewUrlParser : true,useUnifiedTopology : true})
    .then(() => app.listen(PORT,()=>console.log(`Server is running on port :  ${PORT}`) ))
    .catch((error)=> console.log(error.message))

// mongoose.set('useFindAndModify',false)