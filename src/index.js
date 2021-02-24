document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addActivity()
});

function newActivity(str){
  const list = document.getElementById('tasks')
  const newActivity = document.createElement('li')
  newActivity.innerText = str
  list.appendChild(newActivity)
}

function addActivity(){
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const activityInput = event.target.newTaskDescription.value
    newActivity(activityInput)
    form.reset()
  })
}
