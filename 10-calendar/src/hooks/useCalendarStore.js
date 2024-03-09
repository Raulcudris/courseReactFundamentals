import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );
    
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {

        try {
             // TODO: Update events
           if( calendarEvent.id ) {
            // Actualizando
            await calendarApi.put(`/events/${ calendarEvent.id}`, calendarEvent);
            dispatch( onUpdateEvent({ ...calendarEvent, user  }) );
            return
        } 
         // Creando
        const { data } = await calendarApi.post('/events', calendarEvent);
        console.log( {data} )
        dispatch( onAddNewEvent({ ...calendarEvent,id:data.evento.id , user }) );

        } catch (error) {
            console.log( error );
            Swal.fire('Error al guardar',error.response.data.msg,'error');
        }

       
    }

    const startDeletingEvent = () => {
        // Todo: Llegar al backend

        dispatch( onDeleteEvent() );
    }

    const starLoadingEvents = async () =>{
        try {
            const {data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos);
            dispatch( onLoadEvents( events ) );
        } catch (error) {
            console.log('Error Cargando eventos');
            console.log(error)
        }
    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        starLoadingEvents
    }
}