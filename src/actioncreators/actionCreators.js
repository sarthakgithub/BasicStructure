import * as actionTypes from '../constants/constants';

export const userinfo = (userInfoDetails) => ({ type : 'USER_INFO', userInfoDetails}); 

export const userloggingout = () => ({type: 'LOG_OUT'})

export const showLoader = () => ({ type: actionTypes.SHOW_LOADER });

export const hideLoader = () => ({ type: actionTypes.HIDE_LOADER });
