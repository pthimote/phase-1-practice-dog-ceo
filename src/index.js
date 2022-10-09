const breeds = [] 
document.addEventListener('DOMContentLoaded', function (){
    loadImg()
}) 

function loadImg() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((res) => res.json())
    .then((results) => (results.message.forEach(img => addImg(img))))
}
function addImg(dogPic) {
    const imgJs = document.getElementById('dog-image-container')
    const pictures = document.createElement('img')
    pictures.src = dogPic
    imgJs.appendChild(pictures)
}
