
// Desestructuracion
//Asignacion Desestructurante

const persona ={
    nombre: 'Tony Stark',
    edad: 45,
    clave: 'Ironman',
    //rango: 'Soldado',
}

//const { nombre, edad , clave } = persona;
//console.log(nombre);
//console.log(edad);
//console.log(clave);

const retornaPersona = ({ nombre , edad ,clave, rango='Capitán' }) =>{
    //const { edad , nombre, clave } = persona;
    //console.log(nombre,edad,clave,rango);
    return{
        nombreClave : clave,
        anios : edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232,
        },
    }
}

const { nombreClave , anios , latlng : {lat , lng} } = retornaPersona( persona );
console.log(nombreClave, anios , lat , lng)

