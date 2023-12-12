import { getImage } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar un error si no tenemos un api Key ', async () => { 
        //const url = await getImage();
        const resp = await getImage();
        //expect( typeof url ).toBe('string');
        //expect( resp ).toBe(`No se encontro la imagen`);
    });
    


 });