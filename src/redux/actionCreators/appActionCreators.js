import * as types from "../types/appTypes";

export const setValue = (data) => ({
    type: types.SET_VALUE,
    payload: data
})
