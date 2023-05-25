var feat = document.getElementsByClassName('feature')[0];
var tool = document.getElementsByClassName('tool')[0];
var arc = document.getElementsByClassName('archive')[0];
var about = document.getElementsByClassName('about')[0];
var proj = document.getElementsByClassName('project')[0];


function f() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementsByClassName('tool')[0];
    var arc = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    proj.style.display = "none"; tool.style.display = "none"; arc.style.display = "none"; about.style.display = "none";
    feat.style.animation = "fade-in 1.2s ease-in"; feat.style.display = "inline";
}

function t() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementsByClassName('tool')[0];
    var arc = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    proj.style.display = "none"; tool.style.display = "grid"; feat.style.display = "none"; arc.style.display = "none";
    about.style.display = "none"; tool.style.animation = "fade-in 1.2s ease-in";
}

function a() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementsByClassName('tool')[0];
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none";  about.style.display = "none";
    ar.style.display = "grid"; ar.style.animation = "fade-in 1.2s ease-in"; 
}

function ab() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementsByClassName('tool')[0];
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    proj.style.display = "none"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "grid"; about.style.animation = "fade-in 1.2s ease-in"; 
}

function p() {
    var feat = document.getElementsByClassName('feature')[0];
    var tool = document.getElementsByClassName('tool')[0];
    var ar = document.getElementsByClassName('archive')[0];
    var about = document.getElementsByClassName('about')[0];
    var proj = document.getElementsByClassName('project')[0];
    proj.style.display = "grid"; tool.style.display = "none"; feat.style.display = "none"; ar.style.display = "none";
    about.style.display = "none"; proj.style.animation = "fade-in 1.2s ease-in"; 
}