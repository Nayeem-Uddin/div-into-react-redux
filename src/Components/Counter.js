import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increment, decrement} from '../Services/Actions/CounterAction'
const Counter = () => {
    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Calculate : {count}</h1>
            <button onClick={()=> dispatch(increment(3))}>Add</button>
            <button onClick={()=> dispatch(decrement())}>Substract</button>
        </div>
    );
};

export default Counter;