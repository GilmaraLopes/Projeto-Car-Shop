import { Schema, Model, model, models } from 'mongoose';
import IVehicle from '../Interfaces/IVehicle';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  public async create(schema: IVehicle) {
    const createdVehicle = await this.model.create({ ...schema });
    return createdVehicle;
  }
}
export default AbstractODM;