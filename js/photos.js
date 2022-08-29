fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => display(data))

function display(data){
    const photoContainer = document.getElementById('photo-container');
    for(const photo of data){
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo-body')
        photoDiv.innerHTML = `
            <h4>Title : ${photo.title}</h4>
            <img src="${photo.thumbnailUrl}" alt="">
        `
        photoContainer.appendChild(photoDiv);
    }
}