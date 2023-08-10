import {register} from './controllers/auth.js'
import  express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  multer  from 'multer';
import  mongoose  from 'mongoose';
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import postRoute from './routes/post.js'
dotenv.config();

const PORT = process.env.PORT || 6001;
const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running at Port "+PORT);
    })
}).catch((e)=>{
    console.log(e)
})

/* Multer Configuration */
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/assets");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload = multer({storage});

/*  Routes Accepting Files  */
app.post("/auth/register", upload.single("picture"),register);

/*  Routes */
app.use('/auth',authRoute);
app.use('/users',userRoute);
app.use('/posts',postRoute);