import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el <useCounter />', () => {

    test('deberia de retornar los valores por defectos', () => { 
        const { result } = renderHook( ()=> useCounter());
        const { counter , decrement , increment , reset } = result.current;
        
        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual(expect.any( Function ) );

    });   
    
    test('deberia de generar el counter con el valor de 100', () => { 
        const { result } = renderHook( ()=> useCounter(100));
        expect( result.current.counter ).toBe(100);

     });

     test('debe de incrementar el contador', () => { 
        const { result } = renderHook( ()=> useCounter(100));
        const { counter , increment  } = result.current;
        //Llamada a la Funcion
        act( ()=>{
            increment();
        });
        expect( result.current.counter ).toBe(101);
    });

    
    test('debe de decrementar el contador', () => { 
        const { result } = renderHook( ()=> useCounter(100));
        const { counter , decrement  } = result.current;
        //Llamada a la Funcion
        act( ()=>{
            decrement();
        });
        expect( result.current.counter ).toBe(99);
    });

    test('debe de resetear el contador', () => { 
        const { result } = renderHook( ()=> useCounter(100));
        const {  decrement , reset  } = result.current;
        //Llamada a la Funcion
        act( ()=>{
            decrement();
            reset();
        });
        expect( result.current.counter ).toBe(100);
    });



 });