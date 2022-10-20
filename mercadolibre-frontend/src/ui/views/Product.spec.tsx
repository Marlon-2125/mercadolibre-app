import 'whatwg-fetch'
import { render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../../core/commons/store/Store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Product } from './Product';
import { mockProductItem } from '../../__mocks__/products/mockProductItem'

import { rest } from "msw";
import { setupServer } from "msw/node";

let productView: any;

const itemId = 'MLA1118725350';

const assertionItems = {
    wrapper: 'main',
    title: 'Zanella Styler 150 Exclusive - 12c S/interés Hasta $250000',
    tagPrice: 'span',
    altImage: 'Zanella Styler 150 Exclusive - 12c S/interés Hasta $250000',
    purchase: 'Comprar Ahora',
    condition: 'Nuevo',
    sold: '0 vendidos',
    tagImage: 'img',
    description: 'CONCESIONARIO OFICIAL PREMIUM'
}      

const server = setupServer(
    rest.get("http://localhost:5000/api/items/" + itemId, async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockProductItem));
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
    productView = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/items/' + itemId]}>
                <Routes>
                    <Route path='/items/:id' element={<Product />} />
                </Routes>                    
            </MemoryRouter>
        </Provider>);
});


describe('<Product />', () => {
    it('should render a product view and find a wrapper', async () => {
        await waitFor(() => {            
            expect(productView.container.querySelector(assertionItems.wrapper)).toBeInTheDocument();
        });
    });

    it('should render a product view and find a title', async () => {
        await waitFor(() => {            
            expect(screen.queryByText(assertionItems.title)).toBeInTheDocument();
        });
    });

    it('should render a product view and find a tag price', async () => {
        await waitFor(() => {            
            expect(productView.container.querySelector(assertionItems.tagPrice)).toBeInTheDocument();
        });
    });

    it('should render a product view and find a alt Image', async () => {
        await waitFor(() => {            
            expect(screen.queryByAltText(assertionItems.altImage)).toBeInTheDocument();
        });
    });

    it('should render a product view and find a purchase button', async () => {
        await waitFor(() => {            
            expect(screen.queryByText(assertionItems.purchase)).toBeInTheDocument();
        });
    });

    it('should render a product view and find a condition text', async () => {
        await waitFor(() => {            
            expect(screen.queryByText(assertionItems.condition, {exact: false})).toBeInTheDocument();
        });
    });

    it('should render a product view and find a sold quantity text', async () => {
        await waitFor(() => {            
            expect(screen.queryByText(assertionItems.sold, {exact: false})).toBeInTheDocument();
        });
    });

    it('should render a product view and find a description text', async () => {
        await waitFor(() => {            
            expect(productView.queryByText(assertionItems.description, {exact: false})).toBeInTheDocument();
        });
    });
});