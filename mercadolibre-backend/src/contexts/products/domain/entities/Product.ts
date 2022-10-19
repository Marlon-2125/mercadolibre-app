export class Product {
  readonly id: string;
  readonly title: string;
  readonly price: any;
  readonly picture: string;
  readonly condition: string;
  // tslint:disable-next-line:variable-name
  readonly free_shipping: boolean;
  readonly address: string;

  // tslint:disable-next-line:ter-max-len
  constructor({id, title, price, picture, condition, free_shipping, address}: { id: string; title: string; price: any; picture: string; condition: string; free_shipping: boolean; address: string}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.address = address;
  }
}
