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

function createHolidayButton(string) {
  let myButton = document.createElement('button');
  myButton.id = `btn-holiday`;
  myButton.innerText = `${string}`;
  let father = document.querySelector('.buttons-container');
  father.appendChild(myButton);
}

let string = 'Feriados';
createHolidayButton(string);

function addClickEvent() {
  let button = document.getElementById('btn-holiday');
  button.addEventListener('click', function () {
    let holidays = document.querySelectorAll('.holiday')
    holidays.forEach((item) => {
      if (item.style.backgroundColor == 'red') {
        item.style.backgroundColor = "rgb(238, 238, 238)";
      } else {
        item.style.backgroundColor = 'red';
      }
    })
  })
}

addClickEvent();
