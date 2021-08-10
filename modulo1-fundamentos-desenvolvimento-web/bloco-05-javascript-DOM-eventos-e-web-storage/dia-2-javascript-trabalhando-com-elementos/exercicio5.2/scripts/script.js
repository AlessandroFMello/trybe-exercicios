//DESAFIO 1:
let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(tagH1);

//DESAFIO 2:
let tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//DESAFIO 3:
let centerSection = document.createElement('section');
centerSection.className = 'center-content';
tagMain.appendChild(centerSection);

//DESAFIO 4:
let tagP = document.createElement('p');
tagP.innerText = 'Colocar algum texto relevante aqui';
centerSection.appendChild(tagP);

//DESAFIO 5:
let leftSection = document.createElement('section');
leftSection.className = 'left-content';
tagMain.appendChild(leftSection);

//DESAFIO 6:
let rightSection = document.createElement('section');
rightSection.className = 'right-content';
tagMain.appendChild(rightSection);

//DESAFIO 7:
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
leftSection.appendChild(image);
