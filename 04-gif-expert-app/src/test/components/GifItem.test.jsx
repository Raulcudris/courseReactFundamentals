import { render } from '@testing-library/react';
import GifItem from '../../components/GifItem';

describe('Pruebas en el <GifItem /> ', () => { 

    test('debe de hacer match con el snapshot', () => { 
        const { container }  = render(<GifItem  />);
        expect( container ).toMatchSnapshot();
     });
 })