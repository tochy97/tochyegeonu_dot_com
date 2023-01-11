import { SET_USER, SET_ERROR, RESET_USER, SET_LOADED, SET_PERMISSION } from "../types/authTypes";

const initialState = {
    isLoggedIn: false,
    loaded: false,
    user: null,
    status: null,
    error: null,
    permission: null,
}

const authReducers = (state=initialState, {type, payload})=>{
    switch(type){
        case SET_USER:
            state={ ...state,
                isLoggedIn: true,
                loaded: payload.loaded,
                user: payload.user,
                status: payload.status,
                error: null,
                permission: payload.permission
            }
            return state;
        case SET_LOADED:
            state={ ...state,
                loaded: true
            }
            return state;
        case SET_PERMISSION:
            state={ ...state,
                permission: payload
            }
            return state;
        case SET_ERROR:
            state={ ...state,
                loaded: true,
                error: payload.error,
                status: payload.status
            }
            return state;
        case RESET_USER:
            state=initialState;
            return state;
        default:
            return state;
    }
}

export default authReducers;