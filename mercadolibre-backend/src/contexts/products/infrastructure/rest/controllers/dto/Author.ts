export class Author {
  readonly name: string;
  // tslint:disable-next-line:variable-name
  readonly last_name: string;

  // tslint:disable-next-line:ter-max-len
  constructor({name, last_name}: { name: string; last_name: string }) {
    this.name = name;
    this.last_name = last_name;
  }
}
