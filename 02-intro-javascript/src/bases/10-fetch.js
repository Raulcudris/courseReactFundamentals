const apiKey ='vonEXDhuqECd5KVpkpCFV16cs3Fgdo6Q';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
//.then( resp =>{ resp.json().then( data => { console.log(data) } ) } )
.then( resp => resp.json() )
//.then( ({ data }) => console.log(data.images.original.url) )
.then( ({ data }) =>{    
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
} )
.catch( console.warn)


