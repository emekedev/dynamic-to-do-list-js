document.addEventListener('DOMContentLoaded', () =>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText === ""){
            alert('Enter a task');
            return;
        } 

        if(taskText !== ""){
            document.createElement('li').textContent = taskText;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add("remove-btn");

               removeBtn.onclick = function () {
                li.remove();
            };

            li.appendChild(removeBtn);
            document.getElementById("taskList").appendChild(li);

             taskInput.value = '';
        }


       
        addButton.addEventListener("click", addTask);

        taskInput.addEventListener('keypress', function(event){
            if(event.key === 'Enter'){
                addTask();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function(){
        addTask();
    })
})