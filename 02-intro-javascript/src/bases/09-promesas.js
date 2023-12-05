// Promesas
import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //  resolve();
//         const p1 = getHeroeById(1);
//         resolve(p1);
//         //reject('No se pudo encontrar el heroé.')
//     }, 3000);
// });

// promesa.then((heroe)=> { console.log('Heroe',heroe) } )
//        .catch( err => console.log( err ));

const getHeroeByIdAsync = ( id )=>
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const p1 = getHeroeById(id);
            if( p1 ){
                resolve(p1);
            }
            else {
                reject( 'No se pudo encontrar el Héroe');
            }        
        }, 3000);
    });
}

getHeroeByIdAsync(5)
    .then( console.log)
    //.then( heroe => console.log('Heroe',heroe))
    //.catch(err => console.error( err ));
    .catch( console.warn)
