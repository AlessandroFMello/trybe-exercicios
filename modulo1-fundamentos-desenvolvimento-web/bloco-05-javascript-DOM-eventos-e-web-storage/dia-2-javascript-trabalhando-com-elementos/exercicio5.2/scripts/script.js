//DESAFIO 1:
let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(tagH1);

//DESAFIO 2:
let tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//DESAFIO 3:
let tagSectionCenter = document.createElement('section');
tagSectionCenter.className = 'center-content';
tagMain.appendChild(tagSectionCenter);

//DESAFIO 4:
let tagP = document.createElement('p');
tagP.innerText = 'Colocar algum texto relevante aqui';
tagSectionCenter.appendChild(tagP);

//DESAFIO 5:
let tagSectionLeft = document.createElement('section');
tagSectionLeft.className = 'left-content';
tagMain.appendChild(tagSectionLeft);

//DESAFIO 6:
let tagSectionRight = document.createElement('section');
tagSectionRight.className = 'right-content';
tagMain.appendChild(tagSectionRight);
