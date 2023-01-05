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

function sendMail(){
  window.open('mailto:giovannikassis@hotmail.com', '_blank').focus();
}

document.addEventListener('DOMContentLoaded', function() {

  //Home in navbar to scrollto the top
  document.getElementById('home').addEventListener('click', scrollTop)

  //button handlers
  document.getElementById('githubButton').addEventListener('click', github)
  document.getElementById('githubButton2').addEventListener('click', github)
  document.getElementById('sendMail').addEventListener('click', sendMail)
  document.getElementById('sendMail2').addEventListener('click', sendMail)
  document.getElementById('linkedinButton').addEventListener('click', linkedin)
  document.getElementById('linkedinButton2').addEventListener('click', linkedin)

  document.addEventListener('keyup', handleKeyUp)

})
