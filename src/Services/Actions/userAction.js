import {get_req,get_req_success,get_req_failed} from '../types'
import axios from 'axios'

export const usersList = () =>{
    return async (dispatch) => {
        try {
            dispatch({
                type:get_req
            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            dispatch({
                type:get_req_success,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type: get_req_failed,
                payload:error.message
            })
        }
    }
}