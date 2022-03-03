function getData(username) {
    let requestUrl = 'https://dobbiedata.azurewebsites.net/getDobbies?username=' + username;
    return fetch(requestUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {return response.json();})
        .catch(err => console.log(err));
}

let responseDataPromise = getData('you')
    .then(resp => {
        let dobbies = new Array();
        for (let i = 0; i < resp.length; i++) {
            console.log('hellooooo');
            let dobbie = JSON.parse(resp[i]);
            let currSrc = dobbie["src"];
            let currPrompt = dobbie["prompt"];
            let currAnswer = dobbie["answer"];
            let oneDobbie = [currSrc, currPrompt, currAnswer];
            dobbies.push(oneDobbie);
            console.log(dobbies)
        }
        let c = document.getElementsByClassName('list-group-item list-group-item-action py-3 lh-tight');
        let index = dobbies.length - 1;
        for (var i = 0; i < 7; i++) {
            let mainContainer = document.getElementById("firstName");
            var div = document.createElement("div");
            console.log(index);
            div.innerHTML = "From: " + dobbies[index][0] + "<br>" + "Q: " + dobbies[index][1] + "<br>" +"A: " + dobbies[index][2] + "<br>";
            c[i].appendChild(div);
            index--;
        }
    })
