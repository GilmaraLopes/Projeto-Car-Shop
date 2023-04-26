import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarsModel from '../Models/Cars.Model';

class CarsService {
  private model = new CarsModel();
  private createCarDomain(car: ICar) {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(car: ICar) {
    const createdCar = await this.model.create(car);
    return this.createCarDomain(createdCar);
  }
}

export default CarsService;