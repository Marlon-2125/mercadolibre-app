import {Product} from '../../../../domain/entities/Product';
import {Author} from './Author';

export class ProductListDTO {
  readonly author: Author;
  readonly categories: string[];
  readonly items: Product[];

  // tslint:disable-next-line:ter-max-len
  constructor({author, categories, items}: { author: Author; categories: string[]; items: Product[]; }) {
    this.author = author;
    this.categories = categories;
    this.items = items;
  }
}
