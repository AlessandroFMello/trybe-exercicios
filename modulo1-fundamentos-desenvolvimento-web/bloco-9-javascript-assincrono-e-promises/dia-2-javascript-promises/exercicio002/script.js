// Primeiramente, instancie uma Promise
const promise = new Promise((resolve, reject) => {
  //Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * 51);
    array.push(number**2);
  }

  // Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
  const sum = array.reduce((acc, number) => acc + number)

  if (sum > 8000) {
    return reject(`A soma foi igual a ${sum}`);
  }
  resolve(`A soma foi igual a ${sum}`);
})
.then((message) => {console.log(`Promise resolvida: ${message}`)})
.catch((message) => {console.log(`Promise rejeitada: ${message}`)});
