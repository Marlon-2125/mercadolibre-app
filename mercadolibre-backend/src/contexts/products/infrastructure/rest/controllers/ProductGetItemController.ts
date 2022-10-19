import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from './interface/Controller';
import {IProductManager} from '../../../domain/contracts/IProductManager';
import {Logger} from 'tslog';

export class ProductGetItemController implements Controller {
  private productManager: IProductManager;
  private logger: Logger;

  constructor(productManager: IProductManager) {
    this.productManager = productManager;
    this.logger = new Logger({ name: 'Logger' });
  }

  async run(req: Request, res: Response) {
    this.logger.info('[Consume Usecase ProductGetItemController]');
    const itemId = req.params.id as string;
    try {
      const response = await this.productManager.searchById(itemId);
      res.status(httpStatus.OK).send(response);
    } catch (e: any) {
      this.logger.error('[Error in ProductGetItemController]: ' + JSON.stringify(e));
      res.status(e.status).send({code: e.status, message: e.message});
    }
  }
}
