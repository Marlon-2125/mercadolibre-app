import 'whatwg-fetch';
import {prettyDOM, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../../core/commons/store/Store';
import { MemoryRouter } from 'react-router-dom';
import { Search } from './Search';
import { mockProductList } from '../../__mocks__/products/mockProductList';

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('<Search />', () => {  
    it('should render a home view and find a main tag', async () => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve(mockProductList)
        } as any);

        const homeView = render(
        <Provider store={store}>
			<MemoryRouter initialEntries={['/items?search=televisor']}>
				<Search />
			</MemoryRouter>						          
        </Provider>);
        console.log(prettyDOM(homeView.container));
        const divTag = homeView.container.querySelector('main')         
        expect(divTag).toBeInTheDocument();
    });
});