document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const taskText = todoInput.value.trim();
      if (taskText) {
          addTodoItem(taskText);
          todoInput.value = '';
      }
  });

  function addTodoItem(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
          todoList.removeChild(li);
      });

      li.appendChild(deleteBtn);
      li.addEventListener('click', () => {
          li.classList.toggle('completed');
      });

      todoList.appendChild(li);
  }
});
