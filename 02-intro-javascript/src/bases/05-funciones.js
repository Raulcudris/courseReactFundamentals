// Funciones en JS

const saludar = function ( nombre ) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
} 

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo!!`;


//saludar = 30;
//console.log( saludar("Raulo") )

console.log(saludar("Raul Saludar1"))
console.log(saludar2("Raul Saludar2"))
console.log(saludar3("Raul Saludar3 *"))
console.log(saludar4())

const getUser = ()=>
            ({ 
             uid: 'ABC123',
             username: 'El_Papi1502', 
            });

const user = getUser();
console.log(user) 

// Tarea
// 1. Transforme a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo(nombre) {
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Raul Cudris!');
console.log(usuarioActivo);

const getUsuarioActivoTest =  (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivoxx = getUsuarioActivoTest('Raul Cudris! desde Test');
console.log(usuarioActivoxx)


