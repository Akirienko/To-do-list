let input = document.querySelector(".block__form-input");
let btn = document.querySelector(".block__form-btn");
let blockList = document.querySelector(".block__list");



function createElements(text) {
  let newElem = document.createElement("p");
  let spanDelete = document.createElement("span");

  spanDelete.className = "block__list-delete";
  spanDelete.textContent = "delete";

  newElem.className = "block__list-elem";
  newElem.textContent = text;
  spanDelete.addEventListener("click", () => {
    newElem.remove();
  })
  
  newElem.appendChild(spanDelete);

  blockList.appendChild(newElem);

  localStorage.setItem("todo", newElem);
}



btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (!(input.value === "enter: " || input.value === "")) {
    createElements(input.value);
    input.value = "enter: ";
  }
});

input.addEventListener("focus", () => {
  input.value = "";
});

input.addEventListener("blur", () => {
  if(input.value === "") {
    input.value = "enter: ";
  }
});


// const addMessage = document.querySelector(".message"),
//     addButton = document.querySelector(".add"),
//     todo = document.querySelector(".todo");

// let todoList = [];

// if (localStorage.getItem("todo")) {
//   todoList = JSON.parse(localStorage.getItem("todo"));
//   displayMessages();
// }

// addButton.addEventListener("click", () => {
//   let newTodo = {
//     todo: addMessage.value,
//     checked: false,
//     important: false
//   };

//   todoList.push(newTodo);
//   displayMessages();
//   localStorage.setItem("todo", JSON.stringify(todoList));
// });

// function displayMessages() {

//   let displayMessage = "";
//   if(todoList.length === 0) todo.innerHTML = "";
  
//   todoList.forEach((item, i) => {
//     displayMessage += `
//     <li>
//       <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : " "}>
//       <label for="item_${i}" class ="${item.important ? "inportant" : ""}">${item.todo}</label>
//     </li>
//     `

//     todo.innerHTML = displayMessage;
//   })
// }

// todo.addEventListener("change", (ev) => {
//   let idInput = ev.target.getAttribute("id");
//   let forLabel = todo.querySelector("[for="+ idInput + "]");
//   let valueLabel = forLabel.innerHTML;

//   todoList.forEach((item) => {
//     if(item.todo === valueLabel) {
//       item.checked = !item.checked;
//       localStorage.setItem("todo", JSON.stringify(todoList));
//     }
//   })
// })

// todo.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
//   todoList.forEach((item, i) => {
//     if(item.todo === event.target.innerHTML) {
//       if(event.ctrlKey || event.metaKey) {
//         todoList.splice(i, 1)
//       } else {
//         item.important = !item.important;
//       }
//       displayMessages();
//       localStorage.setItem("todo", JSON.stringify(todoList));
//     }
//   });
// });