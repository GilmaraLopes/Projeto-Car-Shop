import { Router } from 'express';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post('/', (req, res, next) => new MotorcyclesController(req, res, next).create());

export default motorcyclesRoutes;