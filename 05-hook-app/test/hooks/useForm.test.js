import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el <useForm />', () => { 

    const initialForm = {
        name : 'Raul',
        email: 'raulcudriz@hotmail.com'
    }


    test('debe de regresar los valores por defectos', () => {
        const { result } = renderHook( ()=> useForm( initialForm ));
        expect(result.current).toEqual({
                                        name: initialForm.name,
                                        email: initialForm.email,
                                        formState: initialForm,
                                        onInputChange: expect.any( Function ),
                                        onResetForm: expect.any( Function ),
                                         });
    });

    test('debe de cambiar el nombre del formulario', () => {  
        const newValue = 'Juan';        
        const { result } = renderHook( ()=> useForm( initialForm ));
        const { onInputChange } = result.current;

        act(()=>{
            onInputChange({ target: { name:'name', value: newValue }});
        });

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name, ).toBe( newValue );

        
    });

 });