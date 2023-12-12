import PropTypes from 'prop-types';

export const FirstApp = ( { title,  subTitle, name } ) => {

  return (
    <>
      <div data-testid="test-title">{ title }</div> 
      <p>{ subTitle }</p>
      <p>{ name  }</p>
   </>
  );
};

FirstApp.propTypes = {
  title : PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name : PropTypes.string,
}

FirstApp.defaultProps ={
  //title   : 'No hay titulo',
  subTitle: 'No hay subTitulo',
  name    : 'Raúl Cudris'
}
