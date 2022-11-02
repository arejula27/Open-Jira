import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { EntryCard } from '.';
import { EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';
import styles from "./EntryList.module.css"


interface Props {
    status: EntryStatus;
}

export const EntrieList:FC<Props> = ({status}) => {

    const {entries,updateEntry} = useContext(EntriesContext);
    const {isDragging,endDragging} = useContext(UIContext)
    //solo vuelve a evaluar si cambian las entradas
    const entryByStatus = useMemo(()=>entries.filter(
        entry=>entry.status===status),[entries])
    
    const onDropEntry = (event: DragEvent<HTMLDivElement>) =>{

        const id = event.dataTransfer.getData("text")
        const entry = entries.find( e => e._id === id )!;
        entry.status = status;
        updateEntry( entry );
        endDragging()


    }
    const allowDrop = (event:DragEvent<HTMLDivElement>)=>{
        event.preventDefault()
        
    }

  return (
    <div 
    onDrop={onDropEntry}
    onDragOver={allowDrop}
    className={isDragging?styles.dragging:''}
    >
        <Paper sx={{
            height: 'calc(100vh - 200px)',
            overflow: 'scroll',
            backgroundColor: 'transparent',
            padding: "1px 5px",
            margin: "0px 10px"
            }}>
                {/*TODO:cambiara si esta en drag o no */}
                <List sx={{opacity: isDragging?0.2:1, transition:"all .3s "}}>
                    {entryByStatus.map((entry)=>{
                            return <EntryCard  entry={entry}  key={entry._id}/>
                    })}
            
                    
              
                    

                </List>
            
        </Paper>
    </div>
  )
}
