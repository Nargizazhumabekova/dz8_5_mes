import React from "react";
import {useSelector} from "react-redux";
import NumberReducer from "../Redux2/NumberReducer";
/*import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction, withParamsAction} from "../redux/Actions";


/*function Main(){
    const count=useSelector(state => state.count)
    const dispatch=useDispatch()
    const incrementCount=()=>{
    dispatch({
        type:'INCREMENT_COUNT',
        payload:count+1
    })
}
const decrementCount=()=>{
        count>0&&
        dispatch({
            type: 'DECREMENT_COUNT',
            payload: count-1
        })
    }

const INCREMENT_TO_10_COUNT=()=>{
        dispatch({
        type:'INCREMENT_TO_10_COUNT',
        payload:count+10
        })
}
const CLEAR_COUNT=()=>{
        dispatch({
        type:'CLEAR_COUNT',
        payload:0
        })
}

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={INCREMENT_TO_10_COUNT}>INCREMENT_TO_10_COUNT</button>
                <button onClick={CLEAR_COUNT}>CLEAR_COUNT</button>
            </div>
        </div>
    );
}

export default Main*/
/*function Main(){

    const title=useSelector(state=>state.titleReducer.title)
    const dispatch=useDispatch()

    const changeTitle=()=>{
        dispatch(changeTitleAction())
    }
    const withParams=()=>{
        dispatch(withParamsAction('good bye'))
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    )
*/

function Main() {
    const number = useSelector(state => state.n = NumberReducer.number)

    return (
    <div>
        <h1>{number}</h1>
        <button>плюс</button>
        <button>минус</button>
        <button>умножить</button>
        <button>разделить</button>
    </div>

)
}



export default Main