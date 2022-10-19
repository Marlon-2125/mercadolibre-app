import {IProductRepository} from '../../domain/contracts/IProductRepository';
import {URL_ENDPOINTS} from '../../../../apps/utils/Constants';
import axios from 'axios';

export class ProductRepository implements IProductRepository {
  constructor() {
  }

  async findById(itemId: string): Promise<any> {
    const url = URL_ENDPOINTS.MERCADOLIBRE_GET_ITEM_BY_ID.replace(':id', itemId);
    return await axios.get(url);
  }

  async findDetailsById(itemId: string): Promise<any> {
    const url = URL_ENDPOINTS.MERCADOLIBRE_GET_ITEM_DESCRIPTION_BY_ID.replace(':id', itemId);
    return await axios.get(url);
  }

  async findByTerm(term: string): Promise<any> {
    const url = URL_ENDPOINTS.MERCADOLIBRE_GET_LIST_ITEMS_BY_TERM.replace(':query', term);
    return await axios.get(url);
  }

  async findCategory(categoryId: string): Promise<any> {
    const url = URL_ENDPOINTS.MERCADOLIBRE_GET_CATEGORY.replace(':id', categoryId);
    return await axios.get(url);
  }
}
