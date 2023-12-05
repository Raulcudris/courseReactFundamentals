//import { heroes } from './data/heroes'
import heroes from '../data/heroes';

//console.log(owners)

// const getHeroeById = (id) =>{
//     return heroes.find( (heroe ) =>{
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id );

//console.log(getHeroeById(3))

export const getHeroesByOwnwer = (owner) => heroes.filter( ( heroe ) => heroe.owner === owner );

//console.log(getHeroesByOwnwer('DC'));