import { types } from "./types"

function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function addUserAction(user) {
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)

        }

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', options)

        if (response.status >= 200 || response.status <= 204) {
            dispatch(preloaderOff())
            alert('вы успешно зарегистрировались')
        }
    }
}
/*function validatePasswords()
{
    const passwords2 = document.getElementById("passwords1").value;
    const passwords1 = document.getElementById("passwords2").value;
    if(passwords2 === passwords1)
    {
        alert("passwords don't match");
        return false;
    }
    return true;*/