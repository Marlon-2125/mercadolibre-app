import {Product} from '../../../../domain/entities/Product';
import {Author} from './Author';

export class ProductItemDTO {
  readonly author: Author;
  readonly item: Product;

  // tslint:disable-next-line:ter-max-len
  constructor({author, item}: { author: Author; item: Product; }) {
    this.author = author;
    this.item = item;
  }
}
