document.addEventListener("DOMContentLoaded", function(){
    const tasklist = document.getElementById("task-list");
    const newTasklist = document.getElementById("new-task");
    const addtasklist = document.getElementById("add-task");

    addTaskButton.addEventListener('click', function(){
        const taskText = newTasklist.ariaValueMax.trim();
        if (taskText !== ""){
            addTask(taskText);
            newTaskInput.value = "";
        }
    })

    newTaskInput.addEventListener('keyup' , function(){
        if (event.key === "Enter"){
            addTaskButton.click();
        }
    })

    function addTask(taskText){
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function(){
            tasklist.removeChild(taskItem);
        })

        taskItem.appendChild(deleteButton);

        taskItem.addEventListener("click", function(){
            taskItem.classList.toogle("Completed")
        })

        tasklist.appendChild(taskItem);
    }
})