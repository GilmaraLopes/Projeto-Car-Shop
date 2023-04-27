import express from 'express';
import carsRoutes from './Routes/Cars.routes';
import motorcyclesRoutes from './Routes/Motorcycles.routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcyclesRoutes);

export default app;
