import {URL} from '../constants/constants.js';

export const postLoginInfo = (updatedObject) => {
    return fetch(URL + '/checkinglogin',{
        method: 'put',
        body: JSON.stringify(updatedObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
    .then((result) => {
        return result;
    })
}