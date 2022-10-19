import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchProducts } from '../domain/SearchProducts'


const initialState: SearchProducts = {
	productList: {}
}

const searchProductSlice = createSlice({
	name: 'searchProducts',
	initialState,
	reducers: {
		setSearchProducts: (state, { payload }: PayloadAction<any>) => {
			state.productList = payload
		}
	}
})

export const { setSearchProducts } = searchProductSlice.actions
export const searchProductReducer = searchProductSlice.reducer
