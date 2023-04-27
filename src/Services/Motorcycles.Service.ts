import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesModel from '../Models/Motorcycle.Model';

class MotorcyclesService {
  private model = new MotorcyclesModel();

  private createMotoDomain(moto: IMotorcycle) {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }
  public async create(moto: IMotorcycle) {
    const createdMoto = await this.model.create(moto);    
    return this.createMotoDomain(createdMoto);
  }
}

export default MotorcyclesService;