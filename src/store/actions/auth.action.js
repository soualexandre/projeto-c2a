import api from '../../config/globalConfig';
import {changeLoading} from './Loading.action'
export const actionTypes = {
    GET_TOKEN : 'GET_TOKEN',
    LOGOUT : 'LOGOUT',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE'
}


export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token
})


export const removeToken = () => ({
    type: actionTypes.LOGOUT,
})

export const loginSuccess = bool => ({
    type: actionTypes.SUCCESS,
    bool
})

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
})


export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const loading = (bool, msg = null) => ({
    type: actionTypes.CHANGE,
    isLoading: {
        active: bool,
        msg: msg
    }
})

export const getUserToken = () => dispatch => 
localStorage.getItem('access_token')
.then(res =>{
    dispatch(loading(false));
    if(typeof res !== 'undefined'){
        dispatch(getToken(res));
    }
})

export const setUserToken = (token) => dispatch => {
    localStorage.setItem('access_token', token);
    dispatch(loading(false))
    dispatch(loginSuccess(true))
}

export const login = (credentials) => {
  
    return dispatch => {
        dispatch(changeLoading({
            open: true,
            msg:'Autenticando...'
        }))
        return api.post('/oauth/token',{
            headers: {
                accpt: 'application/json',
              },
            grant_type: 'password',
            client_id:  '2',
            client_secret: 'Ki3CrWMjD52vjs9yJpvB2loUCN4nBjZEVbqSjJHj',
            username: credentials.username,
            password: credentials.password,
           
        })
        
        .then(res => {
            console.log(res);
              dispatch(changeLoading({
            open: false,
            msg:''
        }))
            if(typeof res !== 'undefined'){
                dispatch(setUserToken(res.data.access_token))

            }
        })
        .catch(error => {
            dispatch(changeLoading({
                open: false,
                msg:''
            }));
            if(error.response){
                if(error.response.status === 401 || error.response.status === 400){
                    alert('Senha incorreta')
                }
            }else{

            }

        })
    
    }
}


//1: IPlChZMxtA1hDwqyxEZTY6C61TSG9DqgLwrpRYvk
//2: myQoctohElL4uMy23mANHeCdPP8Ezn4mO9SmorXy