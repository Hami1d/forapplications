//inputs    id= Todoinput   id= Todoaddbutton
//task  id= Todocontent

// get the input and button
const Todoinput = document.getElementById("Todoinput");
const addTodo = document.getElementById("Todoaddbutton");
const Todocontent = document.getElementById("Todocontent");

addTodo.addEventListener("click", () => {
  // add event listener to the button
  const task = document.createElement("p"); // create a p tag and a button
  const btn = document.createElement("button");
  task.innerText = Todoinput.value; // add the input value to the p tag
  Todocontent.appendChild(task); // append the p tag to the task div
  Todoinput.value = ""; // clear the input value
  btn.innerHTML = "Delete"; // add the delete button
  Todocontent.appendChild(btn); // append the delete button to the task div
  btn.style.backgroundColor = "red";
  btn.style.color = "rgb(255, 255, 255)";
  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    // add event listener to the delete button
    Todocontent.removeChild(task); // remove the p tag
    Todocontent.removeChild(btn); // remove the delete button
  });
  task.addEventListener("click", () => {
    // add event listener to the p tag
    task.style.textDecoration = "line-through"; // add line-through to the p tag
  });
  task.addEventListener("dblclick", () => {
    // add event listener to the p tag
    task.style.textDecoration = "none"; // remove line-through from the p tag
  });
});
