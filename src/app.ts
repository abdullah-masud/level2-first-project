/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UsertRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

// application routes
app.use('/api/v1', router);

const testRoute = async (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', testRoute);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
