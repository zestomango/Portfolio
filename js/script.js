//FUNCTIONS

//INITIALIZATIONS
var socials1 = document.getElementById('socials1');
var socials2 = document.getElementById('socials2');
var socials3 = document.getElementById('socials3');
var socials4 = document.getElementById('socials4');
var socialsbox1 = document.getElementById('socialsbox1');
var socialsbox2 = document.getElementById('socialsbox2');
var socialsbox3 = document.getElementById('socialsbox3');
var socialsbox4 = document.getElementById('socialsbox4');
var topButton = document.getElementById('topButton');
socials1.style.transition = "transform 0.5s ease";


//TOP BUTTON
window.onscroll = function() {scrollFunction();}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//CREATING FUNCTIONS
function showSocialsBox1() {
    socials1.style.opacity = 0.5;
    socialsbox1.classList.toggle('fade');
}

function hideSocialsBox1() {
    socials1.style.opacity = 1;
    socialsbox1.classList.toggle('fade');
}

function showSocialsBox2() {
    socials2.style.opacity = 0.5;
    socialsbox2.classList.toggle('fade');
}

function hideSocialsBox2() {
    socials2.style.opacity = 1;
    socialsbox2.classList.toggle('fade');
}

function showSocialsBox3() {
    socials3.style.opacity = 0.5;
    socialsbox3.classList.toggle('fade');
}

function hideSocialsBox3() {
    socials3.style.opacity = 1;
    socialsbox3.classList.toggle('fade');
}

function showSocialsBox4() {
    socials4.style.opacity = 0.5;
    socialsbox4.classList.toggle('fade');
}

function hideSocialsBox4() {
    socials4.style.opacity = 1;
    socialsbox4.classList.toggle('fade');
}

