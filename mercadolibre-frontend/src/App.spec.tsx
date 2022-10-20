import {prettyDOM, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

const mockedNavbarText = 'Mocked Navbar';

jest.mock('./ui/components/navbar/Navbar', () => ({ Navbar: () => mockedNavbarText }));

describe('<App />', () => {  
    it('should render a app view and find a navbar mocked', () => {
        const appView = render(<App />);
        const navbarTag = appView.queryByText(mockedNavbarText)        
        expect(navbarTag).toBeInTheDocument();
    });  
});
