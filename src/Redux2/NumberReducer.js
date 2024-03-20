import {types} from "../redux/Types";

const initialState={
    number:0,
    num1:0,
    num2:0,
}


export default function NumberReducer(state=initialState,action) {
    if (action.type === types.minus) {
        return {
            ...state,
            number: action.payload
        }
    } else if (action.type === types.plus) {
        return {
            ...state,
            number: action.payload
        }
    } else if (action.type === types.multiplication) {
        return {
            ...state,
            number: action.payload
        }
    } else if (action.type === types.division) {
        return {
            ...state,
            number: action.payload
        }
    } else if (action.type === types.num1) {
        return {
            ...state,
            number: action.payload
        }

    } else if (action.type === types.num2) {
        return {
            ...state,
            number: action.payload
        }
    }
    return state
}