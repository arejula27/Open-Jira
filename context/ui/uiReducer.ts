import { UIState } from ".";


type UIActionType = 
| {type: "UI - Open SideBar"}
| {type: "UI - Close SideBar"}


export const UiReducer = (state: UIState, action: UIActionType):UIState=>{
    switch (action.type) {
        case "UI - Open SideBar":
            return {
               ...state,
               sideMenuIsOpen:true 
            }
            
        case "UI - Close SideBar":
            return {
                ...state,
                sideMenuIsOpen:false 
             }
        default:
            return state
    } 
}