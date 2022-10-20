import 'whatwg-fetch'
import {prettyDOM, render, waitFor, } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../../core/commons/store/Store';
import { MemoryRouter } from 'react-router-dom';
import { Product } from './Product';
import { mockProductItem } from '../../__mocks__/products/mockProductItem'

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('<Product />', () => {  
    it('should render a product view and find a main tag', async () => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve(mockProductItem)
        } as any);

        const productView = render(
        <Provider store={store}>
			<MemoryRouter initialEntries={['/items/MLA1118725350']}>
				<Product />
			</MemoryRouter>						          
        </Provider>);

        await waitFor(() => {
            console.log(prettyDOM(productView.container));
            expect(productView.container.querySelector('main')).toBeInTheDocument();    
        });        
    });
});