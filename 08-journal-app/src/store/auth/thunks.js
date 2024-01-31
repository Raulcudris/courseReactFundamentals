import { loginWithEmailPassword, registerUserWhithEmailPassword, singInWhithGoogle } from '../../firebase/providers';
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) =>{
    return async( dispatch ) =>{
        dispatch( checkingCredentials() );        
        const { ok , uid , photoURL, errorMessage  } = await registerUserWhithEmailPassword({ email, password, displayName } )
        
        if( !ok) return dispatch( logout( { errorMessage } ));

        dispatch(login( { uid , displayName , email , photoURL } ));
        
    }
}


export const startLoginWithEmailPassword = ({ email , password}) =>{
    return async(dispatch) =>{
        dispatch( checkingCredentials() );  

        const resul = await loginWithEmailPassword({ email , password});
        console.log( resul)

        if( !resul.ok ) return dispatch( logout( resul) );
        dispatch(login( resul ));
    }
}

