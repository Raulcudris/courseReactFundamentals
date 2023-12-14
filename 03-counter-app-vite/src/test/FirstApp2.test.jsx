import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp 2 />', () => {    
  const title = 'Hola, Soy Raul';
  const subTitle = 'Soy un subtitulo';

  test('debe de hacer match con el snapshot', () => { 
        const {  container } = render(<FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostar el mensaje "Hola, Soy Raul"', () => { 
      render(<FirstApp title={ title } />);
      expect( screen.getAllByText(title)).toBeTruthy();
      //screen.debug();
    });

    test('debe de mostrar el titulo en un h1', () => { 
      render(<FirstApp title={ title } />);
      expect( screen.getByRole('heading',{ level: 1}).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => { 
       const { getAllByText } = render(
                    <FirstApp 
                    title={ title }
                    subTitle={subTitle} 
                    />);

       expect( getAllByText(subTitle).length ).toBe(1);
     });
    
 });