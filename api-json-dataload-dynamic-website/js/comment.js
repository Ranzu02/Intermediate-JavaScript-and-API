fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(comments => loadComments(comments))

function loadComments(comments){
    const commentDiv = document.getElementById("commentdiv");
    for(const comment of comments){
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <h4>User- ${comment.id}</h4>
            <h3>Comment Title- ${comment.name}</h3>
            <p>Comments- ${comment.body}</p>

        `
        commentDiv.appendChild(newDiv);
        newDiv.classList= "post";
    }
}

