import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {
    divisionAction,
    inputNum1ChangeAction,
    inputNum2ChangeAction,
    minusAction,
    multiplicationAction,
    plusAction
} from "../redux/Actions";




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
    const {number,num1,num2}= useSelector(state => state.NumberReducer)


    const dispatch=useDispatch()
const inputNum1Change=(event)=>{
        dispatch(inputNum1ChangeAction(parseInt(event.target.value)));
}
const inputNum2Change=(event)=>{
        dispatch(inputNum2ChangeAction(parseInt(event.target.value)));
}
const plusNums=()=>{
        dispatch(plusAction(num1+num2))
}
 const minusNums=() =>{
         dispatch(minusAction(num1-num2))
 }

const multiplicationNums=() =>{
         dispatch(multiplicationAction(num1*num2))
 }
 const divisionNums=() =>{
         dispatch(divisionAction(num1/num2))
 }

    return (
    <div>
        <input type='number' value={num1} onChange={inputNum1Change}/>
         <input type='number' value={num2} onChange={inputNum2Change}/>
         <h1>{number}</h1>
        <button onClick={plusAction}>плюс</button>
        <button onClick={minusAction}>минус</button>
        <button onClick={multiplicationAction}>умножить</button>
        <button onClick={divisionAction}>разделить</button>
    </div>

)
}



export default Main