import { NextFunction, Request, Response } from 'express';
// import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycles.Service';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto = { ...this.req.body };
    
    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAll() {
    try {
      const getMoto = await this.service.getAll();
      return this.res.status(200).json(getMoto);
    } catch (error) {
      this.next(error);
    }
  }
  public async getById() {
    const { id } = this.req.params;
    try {
      const result = await this.service.getById(id);
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json({
        id: result.id,
        model: result.model,
        year: result.year,
        color: result.color,
        status: result.status,
        buyValue: result.buyValue,
        category: result.category,
        engineCapacity: result.engineCapacity,
      });
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async update() {
    const { id } = this.req.params;
    const moto = this.req.body;
    try {
      const result = await this.service.update(id, moto);
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json({
        id: this.req.params.id,
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        category: this.req.body.category,
        engineCapacity: this.req.body.engineCapacity,
      });
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;