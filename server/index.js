import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js'

const PORT = 8080 || process.env.PORT;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/',async (req,res) => {
    res.send("Hello world!");
})

const StartServer = () => {
    try {
        connectDb(process.env.MONGO_URl)
            app.listen(PORT, () =>
              console.log(
                `server has started on PORT ${PORT} http://localhost:${PORT}`
              )
            );

    } catch (error) {
        console.log(error);
    }
}

StartServer();