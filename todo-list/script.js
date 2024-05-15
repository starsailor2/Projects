async function fetchTasks() {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    return data.tasks;
}

async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskText })
    });

    const data = await response.json();
    const taskList = document.getElementById('taskList');
    const li = createTaskElement(data.id, taskText, false, taskList);
    taskList.appendChild(li);
    taskInput.value = '';
}

function createTaskElement(id, taskText, done, taskList) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.dataset.id = id;
    if (done) {
        li.classList.add('done');
    }

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.className = 'done-btn';
    doneBtn.onclick = async function() {
        li.classList.toggle('done');
        await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ done: li.classList.contains('done') })
        });
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = async function() {
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE'
        });
        taskList.removeChild(li); // Fixing here
    };

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    return li;
}

document.addEventListener('DOMContentLoaded', async () => {
    const tasks = await fetchTasks();
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = createTaskElement(task.id, task.task, task.done, taskList);
        taskList.appendChild(li);
    });
});
