'use strict'

const postUrl = 'https://dobbiedata.azurewebsites.net/createDobbie';

let prompt, answer, target;


if (document.getElementById('dobbieTarget') !== null) {
    target = document.getElementById('dobbieTarget').value;
    document.getElementById('dobbieTarget').addEventListener('change', function() {
        target = document.getElementById('dobbieTarget').value;
    });
}

if (document.getElementById('dobbiePrompt') !== null) {
    prompt = document.getElementById('dobbiePrompt').value;
    document.getElementById('dobbiePrompt').addEventListener('change', function() {
        prompt = document.getElementById('dobbiePrompt').value;
        console.log(prompt);
    });
}

if (document.getElementById('dobbieAnswer') !== null) {
    answer = document.getElementById('dobbieAnswer').value;
    document.getElementById('dobbieAnswer').addEventListener('change', function() {
        answer = document.getElementById('dobbieAnswer').value;
    });
}

if (document.getElementById('submitDobbie') !== null) {
    document.getElementById('submitDobbie').addEventListener('click', function() {
        if (prompt !== null && answer !== null) {
            if (localStorage.getItem("username")) {
                let src = localStorage.getItem("username");
                let newDobbie = new Dobbie(target, src, prompt, answer);
                pushData(newDobbie);
            }
            
        }
    });
}


function pushData(dobbie) {
    let insertDobbie = JSON.stringify(dobbie);
    console.log(insertDobbie);
    let promise = fetch(postUrl, {
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(dobbie),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    promise
    .catch(err => console.log(err));
}

class Dobbie {
    constructor(username, src, prompt, answer) {
        this.username = username;
        this.src = src;
        this.prompt = prompt;
        this.answer = answer;
    }
}