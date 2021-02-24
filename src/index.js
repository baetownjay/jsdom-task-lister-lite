document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addActivity()
  deleteActivity()
});

function newActivity(str){
  const list = document.getElementById('tasks')
  const newActivity = document.createElement('li')
  newActivity.innerHTML = `<span>${str}</span><button type="button">Delete</button>`
  list.appendChild(newActivity)
}

function addActivity(){
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const activityInput = event.target.newTaskDescription.value
    newActivity(activityInput)
    form.reset()
  })
}

function deleteActivity() {
  const list = document.getElementById('tasks')

  list.addEventListener('click', function(event) {

    // if (event.target.type == "button") {
    //   event.path[1].remove()
    // }

    console.log(event)
    if (event.target.innerText == "Delete") {
      event.path[1].remove()
    }
  })
}
