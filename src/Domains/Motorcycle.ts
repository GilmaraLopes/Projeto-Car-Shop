import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './IVehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}

export default { Motorcycle };