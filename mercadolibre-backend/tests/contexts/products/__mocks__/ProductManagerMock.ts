import {IProductManager} from '../../../../src/contexts/products/domain/contracts/IProductManager';
import {ProductItemDTO} from '../../../../src/contexts/products/infrastructure/rest/controllers/dto/ProductItemDTO';
import {ProductListDTO} from '../../../../src/contexts/products/infrastructure/rest/controllers/dto/ProductListDTO';
import {inputGetItem, productItem, productList} from './mocks/GetItemUsecaseResponseMocks';

export class ProductManagerMock implements IProductManager {

  async searchById(id: string): Promise<ProductItemDTO> {
    switch (id) {
      case inputGetItem.idSuccessFlow:
        return Promise.resolve(productItem);
        break;
    }
    return Promise.resolve(productItem);
  }

  async searchByTerm(term: string): Promise<ProductListDTO> {
    return Promise.resolve(productList);
  }

}
