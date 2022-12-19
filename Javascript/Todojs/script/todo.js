//inputs    id= Todoinput   id= Todoaddbutton
//task  id= Todocontent


const Todoinput = document.getElementById('Todoinput');
const addTodo = document.getElementById('Todoaddbutton');
const Todocontent = document.getElementById('Todocontent');


addTodo.addEventListener('click', function() {
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

    btn.addEventListener('click', function() {
        Todocontent.removeChild(task)
        Todocontent.removeChild(btn)
    });
    task.addEventListener('click', function() {
        task.style.textDecoration = "line-through"
    });
    task.addEventListener('dblclick', function() {
        task.style.textDecoration = "none"
    });
});
