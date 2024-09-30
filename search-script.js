// script.js
function searchImages() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let images = document.getElementsByClassName('image-item');
  
    for (let i = 0; i < images.length; i++) {
      let keywords = images[i].getAttribute('data-keywords').toLowerCase();
      if (keywords.includes(input)) {
        images[i].classList.remove('hidden');
      } else {
        images[i].classList.add('hidden');
      }
    }
  }
  