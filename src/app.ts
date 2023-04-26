import express from 'express';
import carsRoutes from './Routes/Cars.routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);

export default app;
