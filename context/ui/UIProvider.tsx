import { FC ,useReducer} from 'react';
import {PropsWithChildren} from 'react';
import { UIContext,UiReducer } from '.';



export  interface UIState {
    sideMenuIsOpen: boolean;
}

const UI_INITIAL_STATE: UIState ={
    sideMenuIsOpen:false,
}

export const UIProvider:FC<PropsWithChildren> = ({children}) =>{
const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE );


    const  openSideMenu = () =>{
        dispatch({type:"UI - Open SideBar"})
    }

    const  closeSideMenu = () =>{
        dispatch({type:"UI - Close SideBar"})
    }

   return(
      <UIContext.Provider value={{
          ...state,

          //Methods
          openSideMenu,
          closeSideMenu,

      }}>
          {children}
      </UIContext.Provider>
   )
}