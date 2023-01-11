import * as types from "../types/authTypes";
 
const setUser = (data) => ({
    type: types.SET_USER,
    payload: data
})

const resetUser = () =>({
    type: types.RESET_USER,
})

export const setError = (data) => ({
    type: types.SET_ERROR,
    payload: data
})

export const setLoaded = (data) => ({
    type: types.SET_LOADED,
    payload: data
})

export const setPermission = (data) => ({
    type: types.SET_PERMISSION,
    payload:  data
})

export const checkUser = ()  => async dispatch => {
}

export const logInWithEmail = (email, password) => async dispatch => {
};

export const logoutUser = ()  => async dispatch => {
}