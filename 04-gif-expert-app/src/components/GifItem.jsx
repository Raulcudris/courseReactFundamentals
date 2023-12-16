import PropTypes from 'prop-types';
import React from 'react';

const GifItem = ({title , url, id}) => {
  return (
    <div className='card'>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}



export default GifItem;

/* Tarea

1. Añadir PropTypes
    a. title obligatorio
    b. url  obligatorio 

2. Evaluar el snapshot 

*/
