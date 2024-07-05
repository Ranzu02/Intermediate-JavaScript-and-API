function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data =>updateTodos(data))
}

function updateTodos(todos){
    const toDosContentDiv = document.getElementById("todos-container");
    for(const todo of todos){
        const newDiv = document.createElement("div");
        newDiv.classList= 'body';
        newDiv.innerHTML= `
        <h3>User Id: ${todo.userId}</h3>
        <h4>ID: ${todo.id}</h4>
        <p>Title: ${todo.title}</p>
        <p>Is completed: ${todo.completed}</p>
        `
        toDosContentDiv.appendChild(newDiv);
    }
    
}

loadTodos();