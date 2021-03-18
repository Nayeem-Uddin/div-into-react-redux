import {get_req, get_req_success, get_req_failed} from '../types'

const initial_state = {
    loading:false,
    users:[],
    error:''
}
export default function(state = initial_state, action){
    switch(action.type){
        case get_req:
            return {
                ...state,
                loading:true
            }
        case get_req_success:
            return {
                ...state,
                loading:false,
                users:action.payload
            }
        case get_req_failed:
            return {
                loading:false,
                users:action.payload,
                error:action.payload
            }
        default:
            return state;
    }
}