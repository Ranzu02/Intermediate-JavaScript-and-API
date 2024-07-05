// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //.json is not similar but close to JSON.perse()
//       .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => console.log(data))


function reload() {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(json => json.json())
            .then(data => console.log(data))
}

const button = document.getElementById("btn");
button.addEventListener("click", reload);