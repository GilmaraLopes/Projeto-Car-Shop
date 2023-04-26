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

  public async getAll(): Promise<(Car | null)[]> {
    const getCar = await this.model.getAll();
    const result = getCar.map((el) => this.createCarDomain(el));
    return result;
  }

  public async getById(id: string) {
    const carById = await this.model.getById(id);
    return carById;
  }

  public async update(id: string, car: ICar) {
    const carUpdate = await this.model.update(id, car);
    return carUpdate;
  }
}

export default CarsService;