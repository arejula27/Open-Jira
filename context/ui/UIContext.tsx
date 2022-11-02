import { createContext } from 'react';


interface ContextProps{
    sideMenuIsOpen: boolean;

    //Methods
    openSideMenu: () => void;
    closeSideMenu: ()=> void;


}

export const UIContext = createContext({} as ContextProps)


