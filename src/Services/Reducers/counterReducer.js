import {increment_value,decrement_value} from '../types'

const initial_state = {
    count : 0
}
export default function(state = initial_state,action){
    switch(action.type){
        case increment_value:
            return {
                ...state,
                count : state.count + action.payLoad
            }
        case decrement_value:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}