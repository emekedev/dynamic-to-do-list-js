document.addEventListener('DOMContentLoaded', () =>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText === ""){
            alert('Enter a task');
            return;
        }else{
            document.createElement('li').textContent = taskText;
            const button = document.createElement('button');
            button.textContent = 'Remove';
            button.classList.add("remove-button");
        }

        button.addEventListener('click', () =>{
            li.remove();
        })

        li.appendChild(removeButton);
        document.getElementById("taskList").appendChild(li);

        taskInput.value = '';
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