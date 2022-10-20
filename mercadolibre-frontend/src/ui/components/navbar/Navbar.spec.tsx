import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../../../core/commons/store/Store';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

let navbarComponent: any;

beforeEach(() => {
    navbarComponent = render(
        <Provider store={store}>
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>						          
        </Provider>);
})

describe('<Navbar />', () => {  
    it('should render a navbar component and find elements', () => {     
        const headerTag = navbarComponent.container.querySelector('header') 
        const searchInput = navbarComponent.getByPlaceholderText('Nunca dejes de buscar...') 
        const searchButton = navbarComponent.container.querySelector('button')   
        expect(headerTag).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
        expect(searchButton).toBeInTheDocument();
    });
});