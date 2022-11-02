import { Box, Button, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useState } from 'react'

import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {

    const entryContext = useContext(EntriesContext)
    const {isAddingEntry,setIsAddingEntry} = useContext(UIContext)

   // const [IsAdding, setIsAdding] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [isTouched, setIsTouched] = useState(false)

    const onTextChanged = (event: ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value)
        

    }


    const onSave = ()=>{
        if (inputValue.length===0){
            setIsTouched(true)
            return 
        }
        entryContext.addEntry(inputValue)
        setInputValue("")
        setIsTouched(false)
        setIsAddingEntry(false)

    }

    const onCancel = () =>{
        setIsTouched(false)
        setIsAddingEntry(false)

    }



  return (
   <Box sx={{padding:1, marginBottom:2}}>


       {
           isAddingEntry? (
               <>
                    <TextField 
                    fullWidth 
                    sx={{marginTop: 2,marginBottom: 1, }}
                    placeholder={"Nueva entrada"}
                    autoFocus
                    multiline
                    label="Nueva entrada"
                    helperText={inputValue.length<=0 && isTouched && "Escribe una nueva tarea"}
                    error={inputValue.length<=0 && isTouched}
                    value={inputValue}
                    onChange={onTextChanged}
                   />
                    <Box display={'flex'} justifyContent={'space-between'} margin="5px 10px">

                        <Button
                        variant='text'
                        onClick={onCancel}
                        >
                            Cancelar
                        </Button>

                        <Button
                        variant='outlined'
                        color='secondary'
                        endIcon={<SaveAltOutlinedIcon/>}
                        onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
               
                </>
           ):(
                <Button
      
                startIcon={<AddCircleOutlineOutlinedIcon/>}
                fullWidth
                variant='outlined'
                onClick={()=>setIsAddingEntry(true)}
            >
                Añadir tarea
            </Button>
         
           )
       }

   

</Box>

    
  )
}
