import axios from 'axios'

import axiosWithAuth from '../utils/axiosAuth'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log(err)
        })
}