import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsRepository = createApi({
	reducerPath: 'productsRepository',
	baseQuery: fetchBaseQuery({
		baseUrl: `http://localhost:5000/api/items`
	}),
	endpoints: (builder) => ({
		searchProducts: builder.mutation<any, string>({
			query: (term) => `http://localhost:5000/api/items?q=${term}`
		}),
		obtainSearchedProducts: builder.query<[], any>({
			query: (term) => `http://localhost:5000/api/items?q=${term}`
		}),
		getSelectedProduct: builder.mutation<{item: {id: string}}, any>({
			query: (id) => `http://localhost:5000/api/items/${id}`
		}),
		obtainSelectedProducts: builder.query<{item: {}}, any>({
			query: (id) => `http://localhost:5000/api/items/${id}`
		})
	})
})


export const { useSearchProductsMutation, useObtainSearchedProductsQuery, useGetSelectedProductMutation, useObtainSelectedProductsQuery } = productsRepository
