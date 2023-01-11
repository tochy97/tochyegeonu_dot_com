import { SET_VALUE } from "../types/appTypes";

const initialState = {
    navOffset: 0,
}

const appReducers = (state=initialState, {type, payload})=>{
    switch(type){
        case SET_VALUE:
            switch(payload.key)
            {
                case("navOffset"):
                    state={ ...state,
                        navOffset: payload.value
                    }
                    return state;
                default:
                    state={ ...state,
                        navOffset: 0,
                    }
                    return state;
            }
        default:
            return state;
    }
}

export default appReducers;