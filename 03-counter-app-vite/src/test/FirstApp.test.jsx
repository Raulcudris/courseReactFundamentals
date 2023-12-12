import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => { 
    
    // test('debe de hacer match con el snapshot', () => { 
    //     const title = 'Hola, Soy Raul';
    //     const { container }  = render(<FirstApp title={ title } />);

    //     // expect( container ).toMatchSnapshot();
    // });
    
    test('debe de mostrar el titulo en un h1', () => { 
        const title = 'Hola Soy Raul';
        const { container, getByText, getByTestId }  = render(<FirstApp title={ title } />);
        expect( getByText(title) ).toBeTruthy();
        //const h1 = container.querySelector('h1');
        //expect( h1.innerHTML ).toContain( title );
        //console.log(h1.innerHTML);
        expect( getByTestId('test-title').innerHTML ).toBe( title );

    });

    test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola Soy Raul';
        const subTitle = 'Soy un subtitulo';
        const { getByText }  = render(
                <FirstApp 
                    title={ title }
                    subTitle={subTitle} />
        );
        expect( getByText(title) ).toBeTruthy(); 

     });

 });