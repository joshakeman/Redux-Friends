import axiosWithAuth from '../utils/axiosAuth'
import { FETCH_DATA_START } from './friendData';

export const UPDATE_DATA_START = "UPDATE_DATA_START"
export const UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS"
export const UPDATE_DATA_FAILURE = "UPDATE_DATA_FAILURE"


 export const addFriend = friend => dispatch => {
     dispatch({ type: UPDATE_DATA_START }) 

    axiosWithAuth()
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
        console.log(res)
        dispatch({ type: UPDATE_DATA_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log(err)
    })
}