import { FC ,useReducer} from 'react';
import {PropsWithChildren} from 'react';
import { v4 as uuidv4, v4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '../../interfaces/';



export  interface EntriesState {
    entries: Entry[];

}

const Entries_INITIAL_STATE: EntriesState ={
    entries: [],

}

export const EntriesProvider:FC<PropsWithChildren> = ({children}) =>{
const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE );

const addEntry = (description: string)=>{
    const newEntry: Entry ={
        _id: uuidv4(),
        description,
        createdAt: Date.now(),
        status: 'pending'
    }
    dispatch({type:'Entry - Add entry',payload:newEntry})

}

const updateEntry = (entry:Entry)=>{
    dispatch({type:'Entry - Update entry',payload:entry})

}

   return(
      <EntriesContext.Provider value={{
            ...state,
            addEntry,
            updateEntry,
      }}>
          {children}
      </EntriesContext.Provider>
   )
}