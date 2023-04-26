import { Router } from 'express';
import CarsController from '../Controllers/Cars.Controller';

const carsRoutes = Router();

carsRoutes.post('/', (req, res, next) => { new CarsController(req, res, next).create(); });

export default carsRoutes;