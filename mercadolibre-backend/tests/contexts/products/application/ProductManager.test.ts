import {ProductManager} from '../../../../src/contexts/products/application/ProductManager';
import {ProductRepositoryMock} from '../__mocks__/ProductRepositoryMock';
import {inputGetItem} from '../__mocks__/mocks/GetItemUsecaseResponseMocks';
import {inputListItem} from '../__mocks__/mocks/GetListItemsUsecaseResponseMocks';
import httpStatus from 'http-status';
import {ERROR_MESSAGES} from '../../../../src/apps/utils/Constants';

let repository: ProductRepositoryMock;
let manager: ProductManager;

beforeEach(() => {
  repository = new ProductRepositoryMock();
  manager = new ProductManager(repository);
});

describe('ProductManager', () => {
  describe('GetItemProduct', () => {
    it('should return a valid product response', async () => {
      const itemId = inputGetItem.idSuccessFlow;
      const productFinded = await manager.searchById(itemId);
      expect(productFinded.item.id).toEqual(itemId);
    });

    it('should return a valid product without path param response', async () => {
      const itemId = inputGetItem.idSuccessNotPathParamFlow;
      const productFinded = await manager.searchById(itemId);
      expect(productFinded.item.id).toEqual(itemId);
    });

    it('should throw a api error response', async () => {
      try {
        const itemId = '';
        await manager.searchById(itemId);
      } catch (e: any) {
        expect(e.status).toEqual(httpStatus.BAD_REQUEST);
        expect(e.message).toEqual(ERROR_MESSAGES.BAD_ITEM_ID);
      }
    });
  });

  describe('ListItemsProducts', () => {
    it('should find a valid list products response', async () => {
      const term = inputListItem.termSuccessFlow;
      const listProductsFinded = await manager.searchByTerm(term);
      expect(listProductsFinded.items[0].id).toEqual('MLA1118725350');
    });

    it('should find a valid  products list without filters response', async () => {
      const term = inputListItem.termSuccessNotFiltersFlow;
      const listProductsFinded = await manager.searchByTerm(term);
      expect(listProductsFinded.items[0].id).toEqual('MLA1118725350');
    });

    it('should throw a api error response', async () => {
      let term = '';
      try {
        term = '';
        await manager.searchByTerm(term);
      } catch (e: any) {
        expect(e.status).toEqual(httpStatus.BAD_REQUEST);
        expect(e.message).toEqual(ERROR_MESSAGES.BAD_TERM);
      }
    });
  });
});
