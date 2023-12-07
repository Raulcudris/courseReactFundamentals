import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CounterApp = ( { value } ) => {

  const [counter , setCounter] = useState( value );

  const  handleAdd = ()=> {
    setCounter (counter + 1);
    //setCounter( (x) => x + 1 );
  }

  const  handleSubtract = ()=> {
    setCounter (counter - 1);
  }

  const  handleReset = ()=> {
    setCounter (value);
  }



  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

    <button onClick={ handleAdd }>+1</button>
    <button onClick={ handleReset }>Reset</button>
    <button onClick={ handleSubtract } >-1</button>

    </>
  );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

export default CounterApp;