
const tasksContainer = document.getElementById('tasks');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

function renderTask(task) {
  const taskElement = document.createElement('div');

  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  if (task.completed) {
    taskElement.classList.add('completed');
  }

  const taskText = document.createElement('span');

  taskText.textContent = `${task.title} — ${task.completed ? 'completed' : 'not completed'
    }`;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');


  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');

  taskElement.appendChild(checkbox);
  taskElement.appendChild(taskText);
  taskElement.appendChild(editButton);
  taskElement.appendChild(deleteButton);

  editButton.addEventListener('click', () => {
    const editInput = document.createElement('input');

    editInput.value = task.title;
    const saveButton = document.createElement('button');

    saveButton.textContent = 'Save';

    taskElement.replaceChild(editInput, taskText);
    taskElement.insertBefore(saveButton, deleteButton);

    saveButton.addEventListener('click', () => {
      fetch(`/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: editInput.value,
          completed: checkbox.checked
        })
      }).then(response => {
        if (response.ok) {
          taskText.textContent = `${editInput.value} — ${checkbox.checked ? 'completed' : 'not completed'
            }`;

          taskElement.replaceChild(taskText, editInput);
          saveButton.remove();
        }
      });
    });
  });

  checkbox.addEventListener('change', () => {

    if (checkbox.checked) {
      taskElement.classList.add('completed');
    } else {
      taskElement.classList.remove('completed');
    }
    fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: task.title,
        completed: checkbox.checked
      })
    });
  });

  deleteButton.addEventListener('click', () => {
    fetch(`/tasks/${task.id}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.ok) {
        taskElement.remove();
      }
    });
  });

  tasksContainer.appendChild(taskElement);
}

taskForm.addEventListener('submit', event => {
  event.preventDefault();

  fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: taskInput.value
    })
  })
    .then(response => response.json())
    .then(newTask => {
      renderTask(newTask);
      taskInput.value = '';
    });
});

fetch('/tasks')
  .then(response => response.json())
  .then(data => {
    data.forEach(task => {
      renderTask(task);
    });
  });

