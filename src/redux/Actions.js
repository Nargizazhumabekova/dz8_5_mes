import {types} from "./Types"



/*export function changeTitleAction(){
    return{
        type:types.CHANGE_TITLE

    }
}

export function withParamsAction(title){
    return{
        type:types.WITH_PARAMS,
        payload:title
    }
}*/
 export function plusAction(number){
  return{
      type:types.plus,
       payload:number
   }

 }
  export function minusAction(number){
  return{
      type:types.minus,
       payload:number
   }

 }

 export function multiplicationAction(number){
  return{
      type:types.multiplication,
       payload:number
   }
 }

  export function divisionAction(number){
  return{
      type:types.division,
       payload:number
   }
 }

  export function inputNum1ChangeAction(num1){
  return{
      type:types.num1,
       payload:num1
   }
 }

 export function inputNum2ChangeAction(num2){
  return{
      type:types.num2,
       payload:num2
   }
 }