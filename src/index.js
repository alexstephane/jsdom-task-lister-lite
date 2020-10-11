document.addEventListener("DOMContentLoaded", () => {
  // your code here
  main()


  


});
// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.



function main() {
  let input = document.getElementById("new-task-description")
  console.log(input)
  let form = document.getElementById('create-task-form')

  form.addEventListener('click', (event) => {
    event.preventDefault()
    let text = input.value
    let li = document.createElement('li')
    li.textContent = text
    //creating the delete button
    span = document.createElement('span')

    span.textContent = "[x]"

    span.addEventListener("click", () => {
      li.remove()
    })


    li.appendChild(span)
    list.appendChild(li)


  })

}
  
  
  
  

