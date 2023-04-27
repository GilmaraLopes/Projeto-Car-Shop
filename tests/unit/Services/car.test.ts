import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/Cars.Service';

const input = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};
describe('Testes da rota Cars', function () {
  it('Adiciona um novo carro', async function () {
    const output = {
      id: '64497fb073ff005b5c3068ff',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(output);
 
    // Act
    const service = new CarsService();
    const result = await service.create(input);
    // Assert
    expect(result).to.be.deep.equal(output);
  });

  it('Lista todos os carros', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves([{ id: '644ac8ea473538f575f2c55c', ...input }]);

    // Act
    const service = new CarsService();
    const result = await service.getAll();
    // Assert
    expect(result).to.be.deep.equal([{ id: '644ac8ea473538f575f2c55c', ...input }]);
  });

  it('Retorna uma mensagem de erro se o Id for inválido', async function () {
    const message = { message: 'Invalid mongo id' };
    sinon.stub(Model, 'findById').resolves(message);
    
    const service = new CarsService();
    const result = await service.getById('644ac8ea4735');

    expect(result).to.be.deep.equal(message);
  });

  it('Retorna uma mensagem de erro se o Id não existir', async function () {
    const message = { message: 'Car not found' };
    sinon.stub(Model, 'findById').resolves(message);

    const service = new CarsService();
    const result = await service.getById('644ac8ea473538f575f2c55b');

    expect(result).to.be.deep.equal(message);
  });
  afterEach(function () {
    sinon.restore();
  });
});
