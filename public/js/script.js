/*
████████╗██╗░░░██╗██████╗░██████╗░░█████╗░
╚══██╔══╝██║░░░██║██╔══██╗██╔══██╗██╔══██╗
░░░██║░░░██║░░░██║██████╔╝██████╦╝██║░░██║
░░░██║░░░██║░░░██║██╔══██╗██╔══██╗██║░░██║
░░░██║░░░╚██████╔╝██║░░██║██████╦╝╚█████╔╝
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░
*/

function github(){
  window.open("https://www.github.com/g-kassis", '_blank').focus();
}

function linkedin(){
  window.open("https://www.linkedin.com/in/giovanni-kassis", '_blank').focus();
}

function scrollTop(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function() {

  //Home in navbar to scrollto the top
  document.getElementById('home').addEventListener('click', scrollTop)

  //user login and sign up
  document.getElementById('githubButton').addEventListener('click', github)
  document.getElementById('githubButton2').addEventListener('click', github)
  document.getElementById('linkedButton').addEventListener('click', linkedin)

  //add key handler for the document as a whole, not separate elements.
  document.addEventListener('keyup', handleKeyUp)

})