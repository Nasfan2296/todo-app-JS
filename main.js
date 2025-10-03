import TodoAPI from "./api/todoAPI.js";

const api=new TodoAPI();
//TodoAPI.add("Learn JS");
//console.log(TodoAPI.getAll());

const input=document.getElementById("todoInput");
const addBtn=document.getElementById("addBtn");
const todoList=document.getElementById("todoList");



function renderTodos(){
    todoList.innerHTML="";

    api.getAll().forEach(todo => {
        const li=document.createElement("li");
        li.dataset.id=todo.id;
        li.className=todo.completed ? "completed " :"";


        //task text
        const span=document.createElement("span");
        span.textContent=todo.task;

        //complete toggle button
        const toggleBtn=document.createElement("button");
        toggleBtn.textContent=todo.completed ? "Undo" :"Done";
        toggleBtn.addEventListener("click",()=>{
            api.toggleCompleted(todo.id);
            renderTodos();
        });

        //update btn
        const updateBtn=document.createElement("button");
        updateBtn.textContent="Edit";
        updateBtn.addEventListener("click" ,() =>{
            const newTask=prompt("Update task:",todo.task);

            if(newTask  !== null){
                api.update(todo.id, newTask);
                renderTodos();
            }

        });


        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click",()=>{
            api.delete(todo.id);
            renderTodos();
        });

            li.appendChild(span);
            li.appendChild(toggleBtn);
            li.appendChild(updateBtn);
            li.appendChild(deleteBtn);

            todoList.appendChild(li);

     });
}

addBtn.addEventListener("click",()=>{
    api.add(input.value);
    input.value="";
    renderTodos();
});

input.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        addBtn.click();

    }
});

