import { configureStore } from '@reduxjs/toolkit'
import { productsRepository } from '../../products/infrastructure/ProductsRepository'
import { findProductReducer } from '../../products/application/FindProductUseCase';
import { searchProductReducer } from '../../products/application/SearchProductsUseCase';

export const store = configureStore({
	reducer: {
		searchProducts: searchProductReducer,
		findProduct: findProductReducer,
		[productsRepository.reducerPath]: productsRepository.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsRepository.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
