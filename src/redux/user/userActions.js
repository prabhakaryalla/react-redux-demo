import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userTypes"
import axios from "axios"


export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        const url = "http://jsonplaceholder.typicode.com/users";
        axios.get(url).then(res => {
            dispatch(fetchUserSuccess(res.data));
        }).catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}