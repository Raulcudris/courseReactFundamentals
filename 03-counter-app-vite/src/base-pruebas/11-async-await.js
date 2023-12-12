// Async - await
export const getImage = async() =>{
    try {
        const apiKey ='vonEXDhuqECd5KVpkpCFV16cs3Fgdo6Q';
        
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        
        const { data } = await resp.json();
                
        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        //console.error(error)
        return `No se encontro la imagen`;
    }
   
}

getImage()





