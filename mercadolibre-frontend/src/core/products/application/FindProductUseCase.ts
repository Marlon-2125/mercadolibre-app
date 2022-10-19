import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FindProducts } from '../domain/FindProducts'


const initialState: FindProducts = {
	selectedProduct: null
}

const findProductSlice = createSlice({
	name: 'findProduct',
	initialState,
	reducers: {
		setSelectedProducts: (state, { payload }: PayloadAction<any>) => {
			state.selectedProduct = payload
		}
	}
})

export const { setSelectedProducts } = findProductSlice.actions
export const findProductReducer = findProductSlice.reducer
