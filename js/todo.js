let button = document.querySelector("button");
let liste = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click", addTodo);

function addTodo() {
    liste.innerHTML += `<li> ${input.value} <button>delete</button> </li>` ;
    }

