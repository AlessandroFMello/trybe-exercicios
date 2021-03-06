const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1 - Crie uma função para adicionar o turno da noite na lesson2.
//Essa função deve possuir três parâmetros, sendo eles: 
//o objeto a ser modificado, a chave que deverá ser adicionada
//e o valor dela.

function addNightShift(obj, key, value) {
  const newObj = Object.assign(obj)
  newObj[key] = value
  return newObj
}

const newObj = addNightShift(lesson2, 'turno', 'noite');
console.log(newObj);
