import {Router, Request, Response} from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {

  const productListItemsController = container.get('Apps.controllers.ProductListItemsController');
  router.get('/api/items', (req: Request, res: Response) => productListItemsController.run(req, res));

  const productGetItemController = container.get('Apps.controllers.ProductGetItemController');
  router.get('/api/items/:id', (req: Request, res: Response) => productGetItemController.run(req, res));

};
