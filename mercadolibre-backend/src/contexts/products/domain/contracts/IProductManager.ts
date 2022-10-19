import {ProductListDTO} from '../../infrastructure/rest/controllers/dto/ProductListDTO';
import {ProductItemDTO} from '../../infrastructure/rest/controllers/dto/ProductItemDTO';

export interface IProductManager {
  searchById(id: string): Promise<ProductItemDTO>;

  searchByTerm(term: string): Promise<ProductListDTO>;
}
