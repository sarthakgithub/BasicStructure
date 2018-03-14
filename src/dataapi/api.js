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

export const fetching = () => {
    return new Promise(function(resolve,reject){
        var req = new XMLHttpRequest();
        req.open('GET','http://localhost:3000/items');

        req.onload = function(){
            if(req.status == 200){
                resolve(req.response);
            }else{
                reject(Error(req.statusText))
            }
        };

        //handling network errors
        req.onerror = function(){
            reject(Error('Network Error'));
        };

        //Make request
        req.send();
    })
}

export function fetchingItems() {
    return fetching().then((response) => {
        //console.log('Items response',(JSON.parse(response)).shows);
        return ((JSON.parse(response)).shows);
    },(error) => {
        console.log('Failed !',error);
    }).then((result) => {
        return result;
    })
}
