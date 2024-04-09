const inputTask = document.querySelector('input');
const list = document.querySelector('ul');

function addTask() {
    const task = inputTask.value.trim();
    if (!task) {
        alert("Please add a task")
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
    <label>
        <input id=checkbox type="checkbox">
        <span>${task}</span>
    </label>
    <button class="delete-btn"> - </button>    
    `;

    list.appendChild(li);
    inputTask.value = "";

    const checkbox = li.querySelector("#checkbox");
    const deleteButton = li.querySelector('.delete-btn');

    checkbox.addEventListener("click", function(){
        li.classList.toggle("completed", checkbox.checked)
    })

    deleteButton.addEventListener("click", function(){
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
          }
    })

}


