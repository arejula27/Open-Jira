import { UIState } from ".";


type UIActionType = 
| {type: "UI - Open SideBar"}
| {type: "UI - Close SideBar"}
| {type: "UI - Set is adding new entry", payload: boolean}
| {type: "UI - Start Dragging"}
| {type: "UI - End Dragging"}



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
        
        case "UI - Set is adding new entry":
            return{
                ...state,
                isAddingEntry: action.payload
            }
        
        case "UI - Start Dragging":
            return{
                ...state,
                isDragging:true,
                
            }
        case "UI - End Dragging":
            return{
                ...state,
                isDragging:false,
                
            }

        default:
            return state
    } 
}