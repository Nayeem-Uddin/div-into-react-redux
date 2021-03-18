import {increment_value, decrement_value} from '../types'

export const increment = (number) => {
    return {
        type: increment_value,
        payLoad:number
    }
}

export const decrement = () => {
    return {
        type: decrement_value
    }
}