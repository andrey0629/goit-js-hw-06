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
console.log(boxes);

// function createBoxes(amount) {
//   boxes.insertAdjacentHTML("beforeend", markup);
//   boxes.append(markup)
// };

const markup = `<div id="box" class="box"></div>`;


function createBoxes(amount) {
  const box = document.querySelector("#box");
console.log(box);
  boxes.innerHTML += markup;
  getRandomHexColor(box)
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener("click", createBoxes);

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

