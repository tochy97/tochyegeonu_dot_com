import { combineReducers } from "redux";
import authReducers from "./authReducers";
import dataReducers from "./dataReducers";
import appReducers from "./appReducers"

const rootReducer = combineReducers({
    auth: authReducers,
    app: appReducers,
    data: dataReducers
});

export default rootReducer;