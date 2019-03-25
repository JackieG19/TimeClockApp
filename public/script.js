/*global fetch*/
const button = document.getElementById('save-btn');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
    fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
    });
});

