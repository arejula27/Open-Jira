import { FC ,useReducer} from 'react';
import {PropsWithChildren} from 'react';
import { UIContext,UiReducer } from '.';



export  interface UIState {
    sideMenuIsOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState ={
    sideMenuIsOpen:false,
    isAddingEntry:false,
    isDragging: false,
}

export const UIProvider:FC<PropsWithChildren> = ({children}) =>{
const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE );


    const  openSideMenu = () =>{
        dispatch({type:"UI - Open SideBar"})
    }

    const  closeSideMenu = () =>{
        dispatch({type:"UI - Close SideBar"})
    }

    const setIsAddingEntry = (isAddingEntry: boolean)=>{
        dispatch({type: "UI - Set is adding new entry", payload: isAddingEntry})
        
    }

    const startDragging = ()=>{
        dispatch({type:"UI - Start Dragging"})
    }
    const endDragging = ()=>{
        dispatch({type:"UI - End Dragging"})
    }

   return(
      <UIContext.Provider value={{
          ...state,

          //Methods
          openSideMenu,
          closeSideMenu,

          setIsAddingEntry,

          startDragging,
          endDragging,
      }}>
          {children}
      </UIContext.Provider>
   )
}