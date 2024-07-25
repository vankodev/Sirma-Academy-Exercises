document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        addTask(task);
        input.value = '';
    }
});

function addTask(taskText) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');

    const task = document.createElement('span');
    task.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';

    removeButton.addEventListener('click', function () {
        todoList.removeChild(li);
    });

    li.appendChild(task);
    li.appendChild(removeButton);
    todoList.appendChild(li);
}
