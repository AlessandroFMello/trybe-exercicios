//Desafio 1

console.log(document.getElementById('elementoOndeVoceEsta'));

//Desafio 2

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let father = ondeVoceEsta.parentNode

console.log(ondeVoceEsta);
console.log(father);

//Desafio 3

let primeiroFilhoDoFilho = ondeVoceEsta.firstChild;

console.log(primeiroFilhoDoFilho);

document.getElementById('primeiroFilhoDoFilho')= 'Eis aqui o novo texto adicionado';

console.log(primeiroFilhoDoFilho);