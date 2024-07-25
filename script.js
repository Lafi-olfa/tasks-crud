const inputTask= document.querySelector('#input');
const btnAdd= document.querySelector('.btn-add');
const tasks = document.querySelector('.tasks-container');
const btnDelete = document.querySelector('.btn-delete');
const btnEdit = document.querySelector('.btn-edit');
add=()=>{
    console.log(inputTask.value)
    let inputValue=inputTask.value;
    if(inputValue){
    
        let taskItem= document.createElement("div");
        taskItem.classList.add('task-item');

        let p= document.createElement('p');
        p.innerHTML= inputValue;

        let btnEdit= document.createElement('button');
        btnEdit.classList.add('button','btn-edit');
        btnEdit.innerHTML= 'Edit';

        let btnDelete= document.createElement('button');
        btnDelete.classList.add('button', 'btn-delete');
        btnDelete.innerHTML= 'Delete';

        let BbtnComplete= document.createElement('button');
        BbtnComplete.classList.add('button', 'btn-complete');
        BbtnComplete.innerHTML= 'Complete';

        tasks.appendChild(taskItem);

        taskItem.appendChild(p)
        taskItem.appendChild(btnEdit)
        taskItem.appendChild(btnDelete)
        taskItem.appendChild(BbtnComplete)
        inputTask.value = "";

      
        btnEdit.addEventListener('click', function() {
            editTask(p);
        });

        btnDelete.addEventListener('click', function() {
            deleteTask(taskItem);
        });
        BbtnComplete.addEventListener('click', function(){
            p.classList.add('complete');
        })
    }
    

}
function editTask(taskParagraph) {
    const newTaskText = prompt("Edit your task:", taskParagraph.textContent);
    if (newTaskText !== null) {
        taskParagraph.textContent = newTaskText;
    }
}

function deleteTask(taskItem) {
    tasks.removeChild(taskItem);
}
btnAdd.addEventListener('click',add);