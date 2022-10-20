import 'whatwg-fetch';
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../../core/commons/store/Store';
import { MemoryRouter } from 'react-router-dom';
import { Search } from './Search';
import { mockProductList } from '../../__mocks__/products/mockProductList';
import { rest } from "msw";
import { setupServer } from "msw/node";

let searchView: any;

const assertionItems = {
    wrapper: 'main',
    sectionTag: 'section',
    altImage: 'Smart Tv',
    titleFirst: 'Smart Tv',
    freeShipping: 'Envio gratis',
    price: '113.999',
    city: 'Capital Federal'
}    

const server = setupServer(
	rest.get("http://localhost:5000/api/items", async (req, res, ctx) => {
		return res(ctx.status(200),ctx.json(mockProductList));
	}),
);

beforeAll(() => {
	server.listen();
});

afterAll(() => {
	server.close();
});

afterEach(() => {
	server.resetHandlers();
});

beforeEach(() => {
    searchView = render(
        <Provider store={store}>
			<MemoryRouter initialEntries={['/items?search=televisor']}>
				<Search />
			</MemoryRouter>						          
        </Provider>);
});

describe('<Search />', () => {  
    it('should render a search view and find a wrapper', async () => {        
        await waitFor(() => {
            expect(searchView.container.querySelector(assertionItems.wrapper)).toBeInTheDocument();
        });        
    });

    it('should render a search view and find a section tag', async () => {        
        await waitFor(() => {
            expect(searchView.container.querySelector(assertionItems.sectionTag)).toBeInTheDocument();
        });        
    });

    it('should render a search view and find a alt Image', async () => {
        await waitFor(() => {            
            expect(screen.queryAllByAltText(assertionItems.altImage, {exact: false})[0]).toBeInTheDocument();
        });
    });

    it('should render a search view and find a title first product', async () => {        
        await waitFor(() => {
            expect(searchView.getAllByText(assertionItems.titleFirst, {exact: false})[0]).toBeInTheDocument();
        });        
    });

    it('should render a search view and find a free shipping first product', async () => {        
        await waitFor(() => {
            expect(searchView.getAllByText(assertionItems.freeShipping)[0]).toBeInTheDocument();
        });        
    });

    it('should render a search view and find a price first product', async () => {        
        await waitFor(() => {
            expect(searchView.getAllByText(assertionItems.price, {exact: false})[0]).toBeInTheDocument();
        });        
    });

    it('should render a search view and find a city first product', async () => {        
        await waitFor(() => {
            expect(searchView.getAllByText(assertionItems.city, {exact: false})[0]).toBeInTheDocument();
        });        
    });
});