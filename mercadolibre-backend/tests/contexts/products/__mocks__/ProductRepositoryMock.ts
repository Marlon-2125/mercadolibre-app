import {IProductRepository} from '../../../../src/contexts/products/domain/contracts/IProductRepository';
import {
  findByIdSuccessResponse, findByIdSuccessWithoutPathParamResponse,
  findCategorySuccessResponse, findCategorySuccessWithoutPathParamResponse,
  findDetailsByIdSuccessResponse, inputGetItem
} from './mocks/GetItemUsecaseResponseMocks';
import {
  findByTermSuccessNotFiltersResponse,
  findByTermSuccessResponse,
  inputListItem
} from './mocks/GetListItemsUsecaseResponseMocks';

export class ProductRepositoryMock implements IProductRepository {

  async findById(id: string): Promise<any> {
    switch (id) {
      case inputGetItem.idSuccessFlow:
        return Promise.resolve(findByIdSuccessResponse);
        break;
      case inputGetItem.idSuccessNotPathParamFlow:
        return Promise.resolve(findByIdSuccessWithoutPathParamResponse);
        break;
      default:
        return Promise.resolve(findByIdSuccessResponse);
        break;
    }
  }

  async findByTerm(term: string): Promise<any> {
    switch (term) {
      case inputListItem.termSuccessFlow:
        return Promise.resolve(findByTermSuccessResponse);
        break;
      case inputListItem.termSuccessNotFiltersFlow:
        return Promise.resolve(findByTermSuccessNotFiltersResponse);
    }
    return Promise.resolve(findByTermSuccessResponse);
  }

  async findDetailsById(id: string): Promise<any> {
    return Promise.resolve(findDetailsByIdSuccessResponse);
  }

  async findCategory(categoryId: string): Promise<any> {
    switch (categoryId) {
      case inputGetItem.categoryIdPathParam:
        return Promise.resolve(findCategorySuccessResponse);
        break;
      case inputGetItem.categoryIdWithoutPathParam:
        return Promise.resolve(findCategorySuccessWithoutPathParamResponse);
        break;
    }
    return Promise.resolve(findCategorySuccessResponse);
  }

}
