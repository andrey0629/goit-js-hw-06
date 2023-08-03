// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const controls = document.querySelector("#controls");
const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestroy = document.querySelector('#controls button[data-destroy]');

const input = document.querySelector("input");

const boxes = document.querySelector("#boxes");

console.log(controls);
console.log(btnCreate);
console.log(btnDestroy);
console.log(input);
console.log(input.value);
console.log(boxes);


function createBoxes(amount) {
let size = 30;
  const sizeStep = 10;
  let markup = "";
    for (let i = 0; i < input.value; i += 1) {
      const bgColor = getRandomHexColor();
      markup += `<div style="width:${size}px; height:${size}px; background-color: ${bgColor}; margin:10px;"></div>\n`;
      size += sizeStep;
    }

  boxes.innerHTML += markup
}

function removeBoxes() {
  boxes.innerHTML = ``
}

function inputValue() {
  const amount = input.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

input.addEventListener("input", inputValue);
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", removeBoxes);


// const markup = boxes.insertAdjacentHTML("afterbegin", );


// markup.classList
// markup.style.backgroundColor = 'black';
// markup.style.borderWidth = "1px";;
// markup.style.width = "30px";
// markup.style.height = "30px";


// const markup = document.create ("div");
// markup.style.cssText= `
//     border-width: 1px;
//     border-color: #7922CC;    
//     width: 30px;
//     height: 30px;
//     color: black;
//     display: flex;
//     margin: 10px;
//     text-align: center;
// `


// beispiel
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
  // .join("");


// increment.addEventListener("click", event => {
//     counterValue += 1;
//     elValue.textContent = counterValue
// }); 

