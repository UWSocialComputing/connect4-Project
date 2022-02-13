'use strict'

const user = document.getElementById('floatingInput');
const login = document.getElementById('login');

let username;
if (document.getElementById('floatingInput') !== null) {
    document.getElementById('floatingInput').addEventListener('change', function() {
        username = document.getElementById('floatingInput').value;
        localStorage.setItem("username", username);
        console.log(username);
    });
}

if (localStorage.getItem("username")) {
    username = localStorage.getItem("username");
} else if (document.getElementById('floatingInput') === null){
    location.replace("./signin.html")
}
