const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const message = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  console.log(message);
  return message;
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const items = [];
  const orders = order.order;
  const pizzas = orders.pizza;
  const drinks = orders.drinks;
  for (let pizza in pizzas) {
    items.push(` ${pizza}`);
  }

  for (let drink in drinks) {
    items.push(` ${drink}`);
  }
  
  const myItemsToString = items.toString();
  const message = `Olá ${order.name}, o total do seu pedido de${myItemsToString} é R$${order.payment.total}`;
  console.log(message);
  return message;
}

orderModifier(order);
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const message = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  console.log(message);
  return message;
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const items = [];
  const orders = order.order;
  const pizzas = orders.pizza;
  const drinks = orders.drinks;
  for (let pizza in pizzas) {
    items.push(` ${pizza}`);
  }

  for (let drink in drinks) {
    items.push(` ${drink}`);
  }
  
  const myItemsToString = items.toString();
  const message = `Olá ${order.name}, o total do seu pedido de${myItemsToString} é R$${order.payment.total}`;
  console.log(message);
  return message;
}

orderModifier(order);
