
const BASE_URL = "http://localhost:3000";


const newUser = {
    user: "Loren",
    email: "loren@loren.com"
}


function submitData(userName, userEmail) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch(BASE_URL + `/users`, configObj)
    .then(resp => resp.json())
    .then(body => document.getElementsByTagName("body")[0].innerHTML = body.id)
    .catch(error => document.body.innerHTML = error);

    }

fetch(BASE_URL, submitData);