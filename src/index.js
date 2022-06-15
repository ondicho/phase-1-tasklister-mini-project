document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('#create-task-form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addToDoList(e.target.new_task_description.value)
    form.reset()

  })

});

function addToDoList(todo){
  let tasks=document.querySelector('#tasks')
  let li=document.createElement('li')
  li.innerText=todo
  tasks.appendChild(li)
}
