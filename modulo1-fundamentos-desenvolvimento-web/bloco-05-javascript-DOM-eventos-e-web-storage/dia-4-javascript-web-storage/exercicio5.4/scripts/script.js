window.onload = generatePageLoad();

function generatePageLoad() {
  let header = document.getElementById('header');
  let div = document.createElement('div');
  let h1 = document.createElement('h1');
  header.appendChild(div);
  div.className = 'title'
  h1.className = 'title';
  h1.innerHTML = 'Lorem Ipsum';
  div.appendChild(h1);
};
