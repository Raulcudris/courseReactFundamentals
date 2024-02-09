import { fileUpload } from '../../src/helpers/fileUpload';

describe('Pruebas en el fileUpload', () => {
    
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSjtKXUaRqf6sU2nxqi1-6TiTkkzTLPHKVw&usqp=CAU';
    
        const resp = await fetch( imageUrl );
        const blob = await resp.blob;
        const file = new File( blob ,'foto.jpg');
        
        const url = await fileUpload( file);
        expect( typeof url).toBe('string');

    });
    
});