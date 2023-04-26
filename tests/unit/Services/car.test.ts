// tests/unit/services/keyRegister.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/Cars.Service';

describe('Testes da rota Cars', function () {
  it('Adiciona um novo carro', async function () {
    const input = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
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
    // Act
    // Assert
  });

  it('Lista os carros pelo Id', async function () {
    // Arrange
    // Act
    // Assert
  });

  it('Retorna o status 404 se o Id não existir', async function () {
    // Arrange
    // Act
    // Assert
  });
});
