document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let textField = document.getElementById('new-task-description')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    buildNewTasks(textField.value)
    form.reset()
  });
});

function buildNewTasks(task) {
  if (Boolean(task)) {
    let newTask = document.createElement('li')
    newTask.innerText = `${task} `
    document.getElementById('tasks').appendChild(newTask)

    let xBtn = document.createElement('button')
    xBtn.addEventListener('click', handleDelete)
    xBtn.innerHTML = 'x'
    newTask.append(xBtn)
  }
}

function handleDelete(event) {
  event.target.parentNode.remove()
}


