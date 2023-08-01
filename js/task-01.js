// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const cattotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${cattotal.length}`);
console.log("");


cattotal.forEach(function (category) {
  const h2 = category.querySelector("h2");
  const li = category.querySelectorAll("li");

  console.log(`Category: ${h2.innerText}`);
  console.log(`Elements: ${li.length}`);
  console.log("");
});


// console.log(cattotal);



// const body = document.body;
// console.log(body);

// const list = body.children;
// console.log(list);
// cattotal.forEach(function (cat) {
//     console.log(`${cat}`);
// });
// const cat = document.querySelector(".item");

// const cat = cattotal.forEach(function (cate) {
//   console.log(`Category: ${cate}`);
// });
// console.log(cat);
// const lastincat = cat.lastElementChild;
// console.log(lastincat);

// const litotal = lastincat.children;
// console.log(`Elements: ${litotal.length}`);




// const childr = cattotal.children;
// console.dir(childr);
// litotal.forEach(function (li) {
//     console.log(`Elements: ${li.length}`)
// });
// const ulincat = allincat.lastchild;
// console.log(ulincat);

// const h20 = cat.firstElementChild;
// console.log(h20);
// const titel = document.querySelectorAll("h2");
// console.log(titel);

// titel.forEach(function (title) {
//   console.log(`Category: ${title.innerText}`);
// });

// const ul2 = titel.nextElementSibling;
// console.log(ul2);


// console.log(ulki);
// const litotal = cattotal.children;

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.lastElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

{/* <body>
    <p><a href="index.html">Go back</a></p>

    <ul id="categories">
      <li class="item">
        <h2>Animals</h2>

        <ul>
          <li>Cat</li>
          <li>Hamster</li>
          <li>Horse</li>
          <li>Parrot</li>
        </ul>
      </li>
      <li class="item">
        <h2>Products</h2> */}