import {
  ProductGetItemController
} from '../../../../../src/contexts/products/infrastructure/rest/controllers/ProductGetItemController';
import {ProductManagerMock} from '../../__mocks__/ProductManagerMock';
import {IProductManager} from '../../../../../src/contexts/products/domain/contracts/IProductManager';
import {getMockReq, getMockRes} from '@jest-mock/express';
import {inputGetItem} from '../../__mocks__/mocks/GetItemUsecaseResponseMocks';
import * as httpStatus from 'http-status';

const request = getMockReq({params: {id: inputGetItem.idSuccessFlow}});
const response = getMockRes().res;

let manager: IProductManager = new ProductManagerMock();
let controller = new ProductGetItemController(manager);

beforeEach(() => {
  manager = new ProductManagerMock();
  controller = new ProductGetItemController(manager);
});

describe('ProductGetItemController', () => {
  describe('GetItemProduct', () => {
    it('should return a response with 200', async () => {
      await controller.run(request, response);
      expect(response.status).toBeCalledWith(httpStatus.OK);
    });
  });
});
