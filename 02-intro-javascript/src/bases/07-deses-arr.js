
const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3] = personajes;
//console.log( p3 );

const retornaArreglo =()=>{
    return ['ABC',123 ]
}

//console.log(retornaArreglo);
const [ letras, numeros ] = retornaArreglo();

//console.log(letras , numeros)

const usoEstado = ( valor )=>{
    return [ valor , ()=>{ console.log('Hola Mundo') }] ;
}

const [ nombre , setNombre ] = usoEstado('Goku'); 
console.log(nombre);
setNombre();


