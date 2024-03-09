import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onchecking } from "../store";

 
 export const useAuthStore = () =>{
    const { status, user , errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ email, password })=>{
        dispatch( onchecking() )
       try {
           const { data } = await calendarApi.post('/auth',{email ,password});
           localStorage.setItem('token', data.token );
           localStorage.setItem('token-init-date', new Date().getTime());
           dispatch( onLogin({ name: data.name , uid: data.uid }));
           
        } catch (error) {
            console.log({error})
        }
    }

    return{
        //*Propiedades
        status,
        user , 
        errorMessage,
        //* Metodos
        startLogin,
    }
 }