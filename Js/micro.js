/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var saved = document.getElementById('save');
var buttonChange = document.getElementById('notification');

saved.onclick = function () {
    if (saved.value == "opslaan") {
        saved.value = "opgeslagen";
        buttonChange.style.visibility = 'visible';
        console.log('test');

    }else
    if (saved.value == "opgeslagen") {
        saved.value = "opslaan";
        buttonChange.style.visibility = 'hidden';
    }
};
