import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesModel from '../Models/Motorcycle.Model';

class MotorcyclesService {
  private model = new MotorcyclesModel();

  private createMotoDomain(moto: IMotorcycle | null) {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }
  public async create(moto: IMotorcycle) {
    const createdMoto = await this.model.create(moto);    
    return this.createMotoDomain(createdMoto);
  }

  public async getAll(): Promise<(Motorcycle | null)[]> {
    const getMoto = await this.model.getAll();
    const result = getMoto.map((el) => this.createMotoDomain(el));
    return result;
  }

  public async getById(id: string):Promise<IMotorcycle | null> {
    const motoById = await this.model.getById(id);
    return motoById;
  }
}

export default MotorcyclesService;