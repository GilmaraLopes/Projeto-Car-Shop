import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/Motorcycles.Service';

const input = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
describe('Testes da rota Motorcycles', function () {
  it('Adiciona uma nova moto', async function () {
    const output = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(output);

    // Act
    const service = new MotorcyclesService();
    const result = await service.create(input);
    // Assert
    expect(result).to.be.deep.equal(output);
  });

  it('Lista todas as motos', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves([{ id: '6348513f34c397abcad040b2', ...input }]);

    // Act
    const service = new MotorcyclesService();
    const result = await service.getAll();
    // Assert
    expect(result).to.be.deep.equal([{ id: '6348513f34c397abcad040b2', ...input }]);
  });

  it('Retorna uma mensagem de erro se o Id for inválido', async function () {
    const message = { message: 'Invalid mongo id' };
    sinon.stub(Model, 'findById').resolves(message);

    const service = new MotorcyclesService();
    const result = await service.getById('6348513f34c');

    expect(result).to.be.deep.equal(message);
  });

  it('Retorna uma mensagem de erro se o Id não existir', async function () {
    const message = { message: 'Motorcycle not found' };
    sinon.stub(Model, 'findById').resolves(message);

    const service = new MotorcyclesService();
    const result = await service.getById('6348513f34c397abcad040b3');

    expect(result).to.be.deep.equal(message);
  });
  afterEach(function () {
    sinon.restore();
  });
});