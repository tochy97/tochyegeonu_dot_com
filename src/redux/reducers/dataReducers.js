import { SET_DATA, ADD_DATA } from "../types/dataTypes";

const initialState = {
    set: false
}

const dataReducers = (state=initialState, {type, payload})=>{
    switch(type){
        case SET_DATA:
            state={ ...state,
                set: payload
            }
            return state;
        default:
            return state;
    }
}

export default dataReducers;