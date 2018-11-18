import axios from 'axios';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER
} from "./types";

const ROOT_URL = 'http://localhost:3090';

export function signinUser ({ email, password }, props) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                props.history.push('/feature');
            })
            .catch(function (error) {
                    console.log(error);
                    if (error.response) {
                    dispatch(authError('Login data error'))
                }
            }
            )
    }
}
export function signoutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
}

export function authError (error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
