//DESAFIO 1:
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

//DESAFIO 2:
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

//DESAFIO 3:
let centerSection = document.createElement('section');
centerSection.className = 'center-content';
main.appendChild(centerSection);

//DESAFIO 4:
let tagP = document.createElement('p');
tagP.innerText = 'Colocar algum texto relevante aqui';
centerSection.appendChild(tagP);

//DESAFIO 5:
let leftSection = document.createElement('section');

leftSection.className = 'left-content';
main.appendChild(leftSection);

//DESAFIO 6:
let rightSection = document.createElement('section');

rightSection.className = 'right-content';
main.appendChild(rightSection);

//DESAFIO 7:
let image = document.createElement('img');

image.className = 'small-image';
image.src = 'https://picsum.photos/200';
leftSection.appendChild(image);

//DESAFIO 8:
let ul = document.createElement('ul');
let numExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let number in numExtenso) {
  let li = document.createElement('li');
  li.className = 'li';
  li.innerText = numExtenso[number];
  ul.appendChild(li);
}
rightSection.appendChild(ul);

//DESAFIO 9:
for (let index = 0; index < 3; index += 1) {
  let h3 = document.createElement('h3');
  main.appendChild(h3);
}

//ALTERACAO 1:
h1.className = 'title';

//ALTERACAO 2:
let tagsH3 = document.getElementsByTagName('h3');
tagsH3.className = 'description';

//ALTERACAO 3:
main.removeChild(leftSection);

//ALTERACAO 4:
rightSection.style.marginRight = 'auto';

//ALTERACAO 5:
main.style.backgroundColor = 'green';

//ALTERACAO 6:
if(ul.lastChild.innerText === 'dez'){
  ul.lastChild.remove();
}
if(ul.lastChild.innerText === 'nove'){
  ul.lastChild.remove();
}