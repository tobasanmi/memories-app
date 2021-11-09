import express from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors'
import PostRoutes from './routes/post.js';



const app = express();

app.use(bodyParser.json({
    limit:"30mb", extended: "true"
}))
app.use(bodyParser.urlencoded({
    limit:"30mb", extended: "true"
}))

app.use(cors());
app.use("/posts",PostRoutes)

const CONNECTION_URL = "mongodb+srv://koperate10:temisope@cluster0.m6vpc.mongodb.net/memoriesApp?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log('server started on port 5000')))
.catch(err => console.log(err));


// mongoose.set('useFindAndModify', false)