import { Schema, Model, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsModel {
  private schema: Schema; 
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Car || model('Car', this.schema);
  }
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    const result = await this.model.find();    
    return result;
  }

  public async getById(id: string): Promise<ICar | null> {
    const result = await this.model.findById(id);
    return result;
  }

  public async update(id: string, car: ICar) {
    const result = await this.model.findByIdAndUpdate(id, car);
    return result;
  }
}
export default CarsModel;
