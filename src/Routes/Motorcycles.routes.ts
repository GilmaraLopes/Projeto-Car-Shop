import { Router } from 'express';
import MotorcyclesController from '../Controllers/Motorcycles.Controller';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post('/', (req, res, next) => new MotorcyclesController(req, res, next).create());
motorcyclesRoutes.get('/', (req, res, next) => new MotorcyclesController(req, res, next).getAll());
motorcyclesRoutes
  . get('/:id', (req, res, next) => new MotorcyclesController(req, res, next).getById());

export default motorcyclesRoutes;