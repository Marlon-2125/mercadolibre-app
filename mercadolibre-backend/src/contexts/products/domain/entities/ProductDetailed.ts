import {Product} from './Product';

export class ProductDetailed extends Product {
  readonly description: string;
  // tslint:disable-next-line:variable-name
  readonly path_from_root: string[];
  // tslint:disable-next-line:variable-name
  readonly sold_quantity: number;

  // tslint:disable-next-line:ter-max-len
  constructor({id, title, price, picture, condition, free_shipping, address, description, path_from_root, sold_quantity}: { id: string; title: string; price: any; picture: string; condition: string; address: string; free_shipping: boolean; description: string; path_from_root: string[]; sold_quantity: number }) {
    super({id, title, price, picture, condition, address, free_shipping });
    this.description = description;
    this.path_from_root = path_from_root;
    this.sold_quantity = sold_quantity;
  }
}
