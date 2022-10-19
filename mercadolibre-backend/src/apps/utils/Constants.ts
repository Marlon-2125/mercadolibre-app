import {Author} from '../../contexts/products/infrastructure/rest/controllers/dto/Author';

export const AUTHOR: Author = {
  name: 'Marlon',
  last_name: 'Navarrete'
};

export const URL_ENDPOINTS = {
  MERCADOLIBRE_GET_LIST_ITEMS_BY_TERM: 'https://api.mercadolibre.com/sites/MLA/search?q=:query',
  MERCADOLIBRE_GET_ITEM_BY_ID: 'https://api.mercadolibre.com/items/:id',
  MERCADOLIBRE_GET_ITEM_DESCRIPTION_BY_ID: 'https://api.mercadolibre.com/items/:id/description',
  MERCADOLIBRE_GET_CATEGORY: 'https://api.mercadolibre.com/categories/:id'
};

export const URL_IMAGES = {
  URL: 'https://http2.mlstatic.com/D_NQ_NP_767602-',
  IMAGE_SIZE: '-V.webp'
};

export const ERROR_MESSAGES = {
  BAD_ITEM_ID: 'El itemId no debe estar vacío o ser nulo',
  BAD_TERM: 'El término no debe estar vacío o ser nulo'
};
