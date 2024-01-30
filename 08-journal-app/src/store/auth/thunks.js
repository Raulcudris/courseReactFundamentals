import { singInWhithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = ( email , password ) =>{
    return async( dispatch ) =>{
        dispatch( checkingCredentials());
    }
}

export const startGoogleSignIn = () =>{ 
    return async ( dispatch ) =>{
        dispatch( checkingCredentials());
        
        const resul = await singInWhithGoogle();
        
        if( !resul.ok ) return dispatch( logout( resul.errorMessage) );

        dispatch(login( resul ));
        
    }
}

