import { Router } from 'express';
import CarsController from '../Controllers/Cars.Controller';

const carsRoutes = Router();

carsRoutes.get('/', (req, res, next) => { new CarsController(req, res, next).getAll(); });
carsRoutes.get('/:id', (req, res, next) => { new CarsController(req, res, next).getById(); });
carsRoutes.post('/', (req, res, next) => { new CarsController(req, res, next).create(); });
carsRoutes.put('/:id', (req, res, next) => { new CarsController(req, res, next).update(); });

export default carsRoutes;