import { Router } from 'express';
import MotorcyclesController from '../Controllers/Motorcycles.Controller';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post('/', (req, res, next) => new MotorcyclesController(req, res, next).create());

export default motorcyclesRoutes;