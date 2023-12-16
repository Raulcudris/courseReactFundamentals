import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = ({ target }) => {
    setInputValue( target.value );
}

 const onSubmit = ( event ) =>{
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategory(inputValue.trim());   
    setInputValue('');
 }
 

 return (
    <form onSubmit={ onSubmit } aria-label='form'>
        <input 
                type='text'
                placeholder='Buscar Gifs'
                onChange= { onInputChange }                
                value={ inputValue} />
    </form>
    
    )
}

AddCategory.propTypes ={
    onNewCategory: PropTypes.func.isRequired
}





export default AddCategory;