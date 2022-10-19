import {ProductManagerMock} from '../../__mocks__/ProductManagerMock';
import {IProductManager} from '../../../../../src/contexts/products/domain/contracts/IProductManager';
import {getMockReq, getMockRes} from '@jest-mock/express';
import {inputGetItem} from '../../__mocks__/mocks/GetItemUsecaseResponseMocks';
import * as httpStatus from 'http-status';
import {
  ProductListItemsController
} from '../../../../../src/contexts/products/infrastructure/rest/controllers/ProductListItemsController';

const request = getMockReq({params: {id: inputGetItem.idSuccessFlow}});
const response = getMockRes().res;

let manager: IProductManager = new ProductManagerMock();
let controller = new ProductListItemsController(manager);

beforeEach(() => {
  manager = new ProductManagerMock();
  controller = new ProductListItemsController(manager);
});

describe('ProductListItemsController', () => {
  describe('GetListItemsProducts', () => {
    it('should return a response with 200', async () => {
      await controller.run(request, response);
      expect(response.status).toBeCalledWith(httpStatus.OK);
    });
  });
});
