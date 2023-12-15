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
    <form onSubmit={ onSubmit }>
        <input 
                type='text'
                placeholder='Buscar Gifs'
                onChange= { onInputChange }                
                value={ inputValue} />
    </form>
    
    )
}

export default AddCategory;