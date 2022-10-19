export interface IProductRepository {
  findById(id: string): Promise<any>;

  findDetailsById(id: string): Promise<any>;

  findByTerm(term: string): Promise<any>;

  findCategory(categoryId: string): Promise<any>;
}
