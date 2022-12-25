//inputs    id= Todoinput   id= Todoaddbutton
//task  id= Todocontent


const Todoinput = document.getElementById('Todoinput');
const addTodo = document.getElementById('Todoaddbutton');
const Todocontent = document.getElementById('Todocontent');


addTodo.addEventListener('click', () => {
    const task = document.createElement('p');
    const btn = document.createElement("button");
    task.innerText = Todoinput.value
    Todocontent.appendChild(task);
    Todoinput.value = "";
    btn.innerHTML = "Delete";
    Todocontent.appendChild(btn);
    btn.style.backgroundColor = 'red';
    btn.style.color = 'rgb(255, 255, 255)';
    btn.style.cursor= 'pointer';

    btn.addEventListener('click', () => {
        Todocontent.removeChild(task)
        Todocontent.removeChild(btn)
    });
    task.addEventListener('click', () => {
        task.style.textDecoration = "line-through"
    });
    task.addEventListener('dblclick', () => {
        task.style.textDecoration = "none"
    });
});
