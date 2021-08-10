//DESAFIO 1:
let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(tagH1);

//DESAFIO 2:
let tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//DESAFIO 3:
let tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

//DESAFIO 4:
let tagP = document.createElement('p');
tagP.innerText = 'Colocar algum texto relevante aqui'
tagSection.appendChild(tagP);
