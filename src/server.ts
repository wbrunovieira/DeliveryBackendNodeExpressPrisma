import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { routes } from './routes';


const app = express();
app.use(express.json());

const errorHandling = (err:Error, request:Request, response:Response, next:NextFunction) => {
  if(err instanceof Error) {

    response.status(400).json({
      msg: err.message,
      success: false,
    });
  }

  return response.status(500).json({
    status:"error",
    message:"Internal server error"
  })

};

app.use(routes);
app.use(errorHandling);


app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World',
  });
});

app.listen(3000, () => console.log('Server is running'));