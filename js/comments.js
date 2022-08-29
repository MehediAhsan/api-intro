fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => display(data))

function display(data){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of data){
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-body')
        commentDiv.innerHTML = `
            <h4>Name : ${comment.name}</h4>
            <h4>Email : ${comment.email}</h4>
            <p>Comment : ${comment.body}</p>
        `
        commentContainer.appendChild(commentDiv);
    }
}