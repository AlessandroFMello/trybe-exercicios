function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//EXERCÍCIO 1
function sortDaysAndHolidays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];

  for (let day in dezDaysList) {
    let actualDay = document.createElement('li');
    actualDay.innerText = dezDaysList[day];
    actualDay.className = 'day';

    for (let holiday in holidays) {
      if (holidays[holiday] === parseInt(actualDay.innerText)) {
        actualDay.className += ' ' + 'holiday';
      }
    }

    for (let friday in fridays) {
      if (fridays[friday] === parseInt(actualDay.innerText)) {
        actualDay.className += ' ' + 'friday';
      }
    }

    let ul = document.getElementById('days');
    ul.appendChild(actualDay);
  }
}

sortDaysAndHolidays();

//EXERCÍCIO 2
function createHolidayButton(holidayString) {
  let myButton = document.createElement('button');
  myButton.id = `btn-holiday`;
  myButton.innerText = `${holidayString}`;
  let father = document.querySelector('.buttons-container');
  father.appendChild(myButton);
}

let holidayString = 'Feriados';
createHolidayButton(holidayString);

//EXERCÍCIO 3
function addClickEvent(tag, color) {
  let button = document.getElementById(`btn-${tag}`);
  button.addEventListener('click', function () {
    let holidays = document.querySelectorAll(`.${tag}`)
    holidays.forEach((item) => {
      if (item.style.backgroundColor == color) {
        item.style.backgroundColor = "rgb(238, 238, 238)";
      } else {
        item.style.backgroundColor = color;
      }
    })
  })
}

let holidayTag = 'holiday';
let holidayColor = 'red';
addClickEvent(holidayTag, holidayColor);

//EXERCÍCIO 4
function createFridayButton (fridayString) {
  let myButton = document.createElement('button');
  myButton.id = `btn-friday`;
  myButton.innerText = `${fridayString}`;
  let father = document.querySelector('.buttons-container');
  father.appendChild(myButton);
}

let fridayString = 'Sexta-Feira';
createFridayButton(fridayString);

//EXERCÍCIO 5
let fridayTag = 'friday';
let fridaycolor = 'green';
addClickEvent(fridayTag, fridaycolor);

//EXERCÍCIO 6
