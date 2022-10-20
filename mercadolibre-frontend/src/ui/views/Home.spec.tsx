import {prettyDOM, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from './Home';


describe('<Home />', () => {  
    it('should render a home view and find a main div', () => {
        const homeView = render(<Home />);
        console.log(prettyDOM(homeView.container));
        const divTag = homeView.container.querySelector('div')      
        expect(divTag).toBeInTheDocument();
    });  
});
