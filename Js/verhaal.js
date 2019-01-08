/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var desktop = document.getElementById('desktop');

desktop.onclick = function ChangeImg() {
    if (desktop.src.includes('Images/Alzheimer-03.png')) {
        desktop.src = '../Images/Alzheimer-p2.gif';
    } else
    if (desktop.src.includes('Images/Alzheimer-p2.gif')) {
        desktop.src = '../Images/Alzheimer-p3.gif';
    } else
    if (desktop.src.includes('Images/Alzheimer-p3.gif')) {
        desktop.src = '../Images/Alzheimer-p4.gif';
    } else
    if (desktop.src.includes('Images/Alzheimer-p4.gif')) {
        desktop.src = '../Images/Alzheimer-p1.gif';
    } else
    if (desktop.src.includes('Images/Alzheimer-p1.gif')) {
        desktop.src = '../Images/Alzheimer-p2.gif';
    }
};

var mobiel = document.getElementById('mobiel');

mobiel.onclick = function () {
    if (mobiel.src.includes('Images/Alzheimer-mobiel.png')) {
        mobiel.src = '../Images/Alzheimer-mobiel-p1.gif';
    } else
    if (mobiel.src.includes('Images/Alzheimer-mobiel-p1.gif')) {
        mobiel.src = '../Images/Alzheimer-mobiel-p2.gif';
    } else
    if (mobiel.src.includes('Images/Alzheimer-mobiel-p2.gif')) {
        mobiel.src = '../Images/Alzheimer-mobiel-p3.gif';
    } else
    if (mobiel.src.includes('Images/Alzheimer-mobiel-p3.gif')) {
        mobiel.src = '../Images/Alzheimer-mobiel-p4.gif';
    } else
    if (mobiel.src.includes('Images/Alzheimer-mobiel-p4.gif')) {
        mobiel.src = '../Images/Alzheimer-mobiel-p5.gif';
    } else
    if (mobiel.src.includes('Images/Alzheimer-mobiel-p5.gif')) {
        mobiel.src = '../Images/Alzheimer-mobiel-p1.gif';
    }
};
