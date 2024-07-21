import express from 'express';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/user.js';
import { internRouter } from './routes/interns.js';
import cors from 'cors';
import path from 'path';
const app = express();

const port = process.env.PORT ?? 3000;
app.disable('x-powered-by');
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(process.cwd(), 'views')));

app.use('/', internRouter)

app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})