import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/Cars.Service';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const getCar = await this.service.getAll();
      // console.log(getCar, 'controller');
      return this.res.status(200).json(getCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const result = await this.service.getById(id);
      if (!result) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json({
        id: result.id,
        model: result.model,
        year: result.year,
        color: result.color,
        status: result.status,
        buyValue: result.buyValue,
        doorsQty: result.doorsQty,
        seatsQty: result.seatsQty,
      });
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async update() {
    const { id } = this.req.params;
    const car = this.req.body;
    try {
      const result = await this.service.update(id, car);
      if (!result) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json({
        id: this.req.params.id,
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        doorsQty: this.req.body.doorsQty,
        seatsQty: this.req.body.seatsQty,
      });
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarsController;