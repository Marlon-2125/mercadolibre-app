import {prettyDOM, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Spinner } from './Spinner';


describe('<Spinner />', () => {  
    it('should render a spinner component and find a main div', () => {
        const spinnerComponent = render(<Spinner />);
        const divTag = spinnerComponent.container.querySelector('div')      
        expect(divTag).toBeInTheDocument();
    });  
});
