import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502', 
        };

        const user = getUser();
        expect( testUser ).toStrictEqual( user );
     });

     test('getUsuarioActivo debe de retornar un objeto', () => { 
        const name = 'Raul';
        const testUserAct = {        
                uid: 'ABC567',
                username: name
        };       

        const userAct = getUsuarioActivo(name);
        expect(testUserAct).toStrictEqual(userAct);

      });

 })