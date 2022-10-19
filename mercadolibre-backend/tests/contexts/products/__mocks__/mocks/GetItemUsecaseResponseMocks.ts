import {AUTHOR} from '../../../../../src/apps/utils/Constants';
import {ProductListDTO} from '../../../../../src/contexts/products/infrastructure/rest/controllers/dto/ProductListDTO';
import {ProductItemDTO} from '../../../../../src/contexts/products/infrastructure/rest/controllers/dto/ProductItemDTO';

export const inputGetItem = {
  idSuccessFlow: 'MLA1118725350',
  idSuccessNotPathParamFlow: 'MLA1118NOTPATHPARAM',
  idNotFoundProductFlow: 'MLAERRORP',
  categoryIdPathParam: '1MS',
  categoryIdWithoutPathParam: '1MSNOTPATH'
};

export const findByIdSuccessResponse = {
  'data': {
    'id': inputGetItem.idSuccessFlow,
    'title': 'Zanella Styler 150 Exclusive Z3 - Ahora 12 - Créditos Dni!',
    'price': 501990,
    'picture': 'https://http2.mlstatic.com/D_NQ_NP_767602-718849-MLA50364287067_062022-V.webp',
    'condition': 'new',
    'shipping': {
      'free_shipping': true
    },
    'address': {
      'state_name': 'Buenos Aires'
    },
    'seller_address': {
      'state': {
        'name': 'Buenos Aires'
      },
    },
    'category_id': inputGetItem.categoryIdPathParam,
    'thumbnail_id': '1MS'
  }
};

export const findByIdSuccessWithoutPathParamResponse = {
  'data': {
    'id': inputGetItem.idSuccessNotPathParamFlow,
    'title': 'Zanella Styler 150 Exclusive Z3 - Ahora 12 - Créditos Dni!',
    'price': 501990,
    'picture': 'https://http2.mlstatic.com/D_NQ_NP_767602-718849-MLA50364287067_062022-V.webp',
    'condition': 'new',
    'shipping': {
      'free_shipping': true
    },
    'address': {
      'state_name': 'Buenos Aires'
    },
    'seller_address': {
      'state': {
        'name': 'Buenos Aires'
      },
    },
    'category_id': inputGetItem.categoryIdWithoutPathParam,
    'thumbnail_id': '1MS'
  }
};

export const findByIdErrorResponse = {
  'data': undefined,
  'headers': {'undefined': undefined},
  'request': undefined,
  'statusText': '',
  'config': {},
  'status': 404
};

export const findDetailsByIdSuccessResponse = {
  'data': {
    'plain_text': 'MLA1118725350'
  }
};

export const findCategorySuccessResponse = {
  'data': {
    'path_from_root': [
      {
        'id': 'MLA1132',
        'name': 'Juegos y Juguetes'
      },
      {
        'id': 'MLA352344',
        'name': 'Armas y Lanzadores de Juguete'
      },
      {
        'id': 'MLA433029',
        'name': 'Pistolas y Escopetas'
      }
    ]
  }
};

export const findCategorySuccessWithoutPathParamResponse = {
  'data': {
    'path_from_root': []
  }
};

export const productItem: ProductItemDTO = {
  'author': AUTHOR,
  'item': {
    'id': 'ID',
    'title': 'title',
    'price': 5000,
    'picture': 'ALX',
    'condition': 'new',
    'free_shipping': true,
    'address': 'Buenos Aires'
  }
};

export const productList: ProductListDTO = {
  'author': AUTHOR,
  'categories': [],
  'items': [productItem.item, productItem.item]
};
