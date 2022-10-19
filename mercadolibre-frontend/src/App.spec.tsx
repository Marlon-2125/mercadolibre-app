import App from './App.css'
import {screen, render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

describe('HomeView Render', () => {  

    it('should render a home view', () => {
        const homeView = render(<App />);
    });

    it('should navigate to search page', () => {
        const searchRoute = '/items/search=televisores'

        const searchView = render(
            <MemoryRouter initialEntries={[searchRoute]}>
              <App />
            </MemoryRouter>,
          )

        console.log(searchView);
        
    });
});
