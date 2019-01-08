/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var saved = document.getElementById('save');
var voegtoe = document.getElementById('add');

saved.onclick = function () {
    if (saved.value == "opslaan") {
        saved.value = "opgeslagen";
        voegtoe.className('saved');
    }else
    if (saved.value == "opgeslagen") {
        saved.value = "opslaan";
        voegtoe.className('add');
    }
};
