import {types} from "../redux/Types";

const initialState={
    number:null
}

export default function NumberReducer(state=initialState.action){
 if (action.type===types.minus){
     return {...state,number}
 }


    return state
}