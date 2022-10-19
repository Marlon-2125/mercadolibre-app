import {Product} from '../domain/entities/Product';
import {IProductRepository} from '../domain/contracts/IProductRepository';
import {IProductManager} from '../domain/contracts/IProductManager';
import {ProductDetailed} from '../domain/entities/ProductDetailed';
import {ProductListDTO} from '../infrastructure/rest/controllers/dto/ProductListDTO';
import {ProductItemDTO} from '../infrastructure/rest/controllers/dto/ProductItemDTO';
import {Logger} from 'tslog';
import {AUTHOR, ERROR_MESSAGES, URL_IMAGES} from '../../../apps/utils/Constants';
import {ApiError} from '../domain/errors/Error';
import httpStatus from 'http-status';

export class ProductManager implements IProductManager {
  private repository: IProductRepository;
  private logger: Logger;

  constructor(repository: IProductRepository) {
    this.repository = repository;
    this.logger = new Logger({name: 'myLogger'});
  }

  async searchById(itemId: string): Promise<ProductItemDTO> {
    if (itemId === '') {
      const messageError = ERROR_MESSAGES.BAD_ITEM_ID;
      this.logger.error('[Error in ProductManager]: ' + messageError);
      throw new ApiError({status: httpStatus.BAD_REQUEST, message: messageError});
    }
    try {
      const productItem = await this.repository.findById(itemId);
      const productDescription = await this.repository.findDetailsById(itemId);
      const categories = await this.repository.findCategory(productItem.data.category_id);
      const categoriesPathFromRoot = categories.data.path_from_root;
      let categoriesData = [];
      if (categoriesPathFromRoot.length > 0) {
        categoriesData = categoriesPathFromRoot.map((category: any) => category.name);
      }
      const productItemData = new ProductDetailed({
        id: productItem.data.id,
        title: productItem.data.title,
        price: productItem.data.price,
        picture: URL_IMAGES.URL + productItem.data.thumbnail_id + URL_IMAGES.IMAGE_SIZE,
        condition: productItem.data.condition,
        free_shipping: productItem.data.shipping.free_shipping,
        address: productItem.data.hasOwnProperty('address') ? productItem.data.address.state_name : productItem.data.seller_address.state.name,
        description: productDescription.data.plain_text,
        path_from_root: [...categoriesData],
        sold_quantity: productItem.data.sold_quantity
      });
      const productItemDTO = new ProductItemDTO({
        author: AUTHOR,
        item: productItemData
      });
      return productItemDTO;
    } catch (e: any) {
      this.logger.error('[Error in ProductManager]: ' + e);
      throw new ApiError({status: e.response.status, message: e.message});
    }
  }

  async searchByTerm(term: string): Promise<ProductListDTO> {
    if (term === '') {
      const messageError = ERROR_MESSAGES.BAD_TERM;
      this.logger.error('[Error in ProductManager]: ' + messageError);
      throw new ApiError({status: httpStatus.BAD_REQUEST, message: messageError});
    }
    try {
      const productList = await this.repository.findByTerm(term);
      const categories = productList.data.filters.length > 0 ? productList.data.filters.find((filter: any) => filter.id === 'category').values[0].path_from_root : [];
      const categoriesData = categories.map((category: any) => category.name);
      const productListData = productList.data.results.map((product: any) =>
        new Product({
          id: product.id,
          title: product.title,
          price: product.price,
          picture: URL_IMAGES.URL + product.thumbnail_id + URL_IMAGES.IMAGE_SIZE,
          condition: product.condition,
          free_shipping: product.shipping.free_shipping,
          address: product.address.state_name
        }));
      const productListDTO = new ProductListDTO({
        author: AUTHOR,
        categories: [...categoriesData],
        items: productListData
      });
      return productListDTO;
    } catch (e: any) {
      this.logger.error('[Error in ProductManager]: ' + e);
      throw new ApiError({status: e.response.status, message: e.message});
    }
  }
}
