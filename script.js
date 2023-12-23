
const allProjects = {


    "Project1": { "Title":"Personal Website" ,"ImageURL":"static/pyramids.jpeg", "Text":"Web Design/Development" , "Tech":"JS|HTML|CSS"},
    "Project2": { "Title":"AED Plus" ,"ImageURL":"static/aed.jpeg", "Text":"Software Development" , "Tech":"C++|Qt"},
    "Project3": { "Title":"Project Dory" ,"ImageURL":"static/dory.jpeg", "Text":"Artificial Intelligence" , "Tech":"Python"},

    "Project4": { "Title":"Movie Database" ,"ImageURL":"static/movieDB.png", "Text":"Web Design/Development" , "Tech":"JS|HTML|CSS\n|Node|Express|MongoDB|APIs"},
    "Project5": { "Title":"P5" ,"ImageURL":"", "Text":"COMING SOON" , "Tech":""},
    "Project6": { "Title":"P6" ,"ImageURL":"", "Text":"COMING SOON" , "Tech":""},
                
}

const allInfos = {


    "Info1": { "Title":"Web Development", "Text":"I am skilled in JS, HTML, and CSS. My journey in the web realm extends to Node.js, Express.js, MongoDB, and APIs. I thrive on creating seamless and dynamic online experiences."},
    "Info2": { "Title":"Software Development" , "Text":"I have a strong foundation in software development principles such as object-oriented programming, data structures & algorithms. Specializing in multiple programming languages like C/C++, Python, and Java" },
    "Info3": { "Title":"Extras" ,"Text":"Data Structures & Algorithms\nArtificial Intelligence\nOperating Systems\n"},
                
}

function clear(){
    var bodyCard = document.getElementById('body-card');
    bodyCard.lastElementChild.remove()
    
}

function showHome() {

    clear();

    //renames the title
    document.getElementById('title').innerHTML = "";

    document.getElementById('header').style.backgroundPositionY = "0";
    document.getElementById('header').style.height = "600px";
    document.getElementById('header').style.marginBottom = "0";

    var bodyCard = document.getElementById('body-card');

    //creates project section
    var cardRow = document.createElement('div');
    cardRow.className = "card-row";



    bodyCard.append(cardRow)

}

function showAbout() {

    clear();
    document.getElementById('header').style = ""
    //renames the title
    document.getElementById('title').innerHTML = "About";


    var bodyCard = document.getElementById('body-card');

    //creates project section
    var aboutSection = document.createElement('div');
    var aboutParagraph = document.createElement('p');
    aboutSection.className = "about-section";
    aboutParagraph.className = "about-paragraph";
    
    aboutParagraph.innerHTML = "I'm a Computer Science student at Carleton University, with a focus on web and software development. My interests include Web, Software development, and security. I began programming in C and C++, then moved on to Python, currently the majority of my coursework is in Java and C++. At the moment, I'm studying operating systems and software development. When I'm not working on my studies, I'm looking to participate in hackathons and side projects";

    aboutSection.append(aboutParagraph);
    

    //creates project row
    var cardRow = document.createElement('div');
    cardRow.className = "card-row";

    for (const info in allInfos) {
        
        var column = document.createElement('div');
        var card = document.createElement('div');
        var infoTitle = document.createElement('h3');
        var text = document.createElement('p');

        
        column.className = "card-column"
        card.className = "card-card"
        card.style.backgroundColor = '#1A1A1A'

        infoTitle.innerHTML = allInfos[info].Title;
        text.innerHTML = allInfos[info].Text;
        text.style.fontSize = "14px"

        cardRow.append(column);
        column.append(card);
        card.append(infoTitle)
        card.append(text)

    }
    aboutSection.append(cardRow);
    bodyCard.append(aboutSection)


}

function showProjects() {

    clear();
    document.getElementById('header').style = ""
    //renames the title
    document.getElementById('title').innerHTML = "Projects";


    var bodyCard = document.getElementById('body-card');

    //creates project row
    var cardRow = document.createElement('div');
    cardRow.className = "card-row";

    for (const project in allProjects) {

        
        var column = document.createElement('div');
        var card = document.createElement('div');

        
        column.className = "card-column"
        column.id = "card-column " + project.charAt(7)
        column.style.background = 'url('+allProjects[project].ImageURL+') no-repeat center'
        column.style.backgroundSize = '100% 100%'
        card.className = "card-card"
        card.id = "card-card" + project.charAt(7)
        card.style.height='200px';

        cardRow.append(column);
        column.append(card);

    }

    bodyCard.append(cardRow)
    
}

function showMore() {

    document.getElementById('header').style = ""

    //renames the title
    var header = document.getElementById('header');

    header.classList.toggle('flip');

    //header.style.backgroundImage = 'url(static/dropImg.png)';

    

}

function onProject(id){
    var card = document.getElementById('card-card'+id);
    card.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

    var projectTitle = document.createElement('h3');
    var text = document.createElement('p');
    var tech = document.createElement('p');

    projectTitle.innerHTML = allProjects['Project'+id].Title;
    text.innerHTML = allProjects['Project'+id].Text;
    tech.innerHTML = allProjects['Project'+id].Tech;

    projectTitle.style.pointerEvents = 'none'
    text.style.pointerEvents = 'none'
    tech.style.pointerEvents = 'none'

    while (card.firstChild) {
        card.removeChild(card.lastChild);
        
    }

    card.append(projectTitle);
    card.append(text);
    card.append(tech);

}

function offProject(id){
    var card = document.getElementById('card-card'+id)
    card.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    while (card.firstChild) {
        card.removeChild(card.lastChild);
        
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('home').addEventListener('click',showHome);
    document.getElementById('about').addEventListener('click',showAbout);
    document.getElementById('projects').addEventListener('click',showProjects);
    document.getElementById('more').addEventListener('click',showMore);

    document.addEventListener('mouseover', function(e){     
        if(e.target.id.toString().includes('card-card')){
            onProject(e.target.id.toString().charAt(e.target.id.toString().length-1));
        }
      });

      document.addEventListener('mouseout', function(e){     
        if(e.target.id.toString().includes('card-card')){
            offProject(e.target.id.toString().charAt(e.target.id.toString().length-1));
        }
      });
});