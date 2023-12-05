// Async - await

const getImagenPromesa = ()=>{
    return new Promise( (resolve, reject) =>{
        resolve('http://sjsjsjajajaja.com')
    })
}

getImagenPromesa().then( console.log);