
import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
    name: 'journal',
    initialState:{
        isSaving: true,
        MessageSaved: '',
        note: [],
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
        addNewEmptyNote: ( state , action ) =>{
        },

        setActiveNote: (state , action ) =>{
        },

        setNote: (state , action ) =>{
        },

        setSaving: (state ) =>{
        },

        updateNote: (state , action ) =>{
        },

        deleteNoteById: (state , action ) =>{
        },
    }
});

export const { 
    addNewEmptyNote,
    setActiveNote,
    setNote,
    setSaving,
    updateNote,
    deleteNoteById, } = journalSlice.actions;
