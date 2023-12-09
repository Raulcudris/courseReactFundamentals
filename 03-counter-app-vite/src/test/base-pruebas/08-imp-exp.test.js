import { getHeroeById, getHeroesByOwnwer } from "../../base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        expect( hero ).toEqual({ id: 1,name: 'Batman',owner: 'DC'});
    });

    test('getHeroeById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        expect( hero ).toBeFalsy();
    });

    //Tarea:
    //Debe de retornar un arreglo con los héroes de DC
    //Length === 3
    //toEqual al arreglo filtrado
    test('getHeroesByOwnwer debe de regresar heroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwnwer( owner );
       expect( heroes.length ).toBe( 3 );
       expect( heroes ).toEqual( [
            { id: 1,name: 'Batman',owner: 'DC'},
            { id: 3,name: 'Superman',owner: 'DC'},
            { id: 4,name: 'Flash',owner: 'DC'},
        ] );
        expect( heroes ).toEqual( heroes.filter(( heroe ) => heroe.owner === owner ));
     });
   
    //debe de retornar un arreglo con los héroes de Marvel
    // Length ===2
    test('getHeroesByOwnwer debe de regresar heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwnwer( owner );
       expect( heroes.length ).toBe( 2 );     
       expect( heroes ).toEqual( heroes.filter(( heroe ) => heroe.owner === owner ));
     });


});