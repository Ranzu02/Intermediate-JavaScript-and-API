function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(json =>console.log(json))
}