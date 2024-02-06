
import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
    name: 'journal',
    initialState:{
        isSaving: false,
        MessageSaved: '',
        notes: [],
        active: null,
        /*active:{
            id: 'ABC123',
            title: '',
            body:'',
            date:123566,
            imageUrls:[], //https://foto1.jpg,https://foto2.jpg https://foto1.jpg
        }*/
    },
    reducers:{
        savingNewNote: (state) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: ( state , action ) =>{
            state.notes.push( action.payload);
            state.isSaving = false;
        },

        setActiveNote: (state , action ) =>{
            state.active = action.payload;
            state.MessageSaved = '';   
        },

        setNotes: (state , action ) =>{
            state.notes  = action.payload;
        },

        setSaving: (state ) =>{
            state.isSaving = true;
            state.MessageSaved = '';            //Todo: Mensaje de error
        },

        updateNote: (state , action ) =>{
            state.isSaving = false;
            state.notes = state.notes.map( note =>{
                if(note.id === action.payload.id )
                {
                 return action.payload;
                }
                return note;
            });
            state.MessageSaved = `${ action.payload.title} , actualizada correctamente`;
        },
        setPhotosToActiveNote : (state , action ) =>{
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteById: (state , action ) =>{
        },
    }
});

export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    deleteNoteById, } = journalSlice.actions;
