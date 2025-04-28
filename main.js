const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;
const cardsContainer = document.getElementById('cards-container');

axios.get(apiUri)
  .then(response => {
    const photos = response.data.slice(0, 10);
    photos.forEach(photo => createCard(photo));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function createCard(photo) {
  const col = document.createElement('div');
  col.className = 'col-sm-10 col-md-5 col-lg-4 mb-4';

  const card = `
    <div class="card m-2 rounded-0">
      <div class="card-body m-2 rounded-0 position-relative">
        <div class="card-pin">
          <img src="./img/pin.svg" alt="pin" width="40">
        </div>
        <img src="${photo.url}" class="card-img rounded-0 card-image" alt="${photo.title}">
        <p class="card-text edu-tas-beginner mt-3">${photo.title}</p>
        <p class="card-text sometype-mono mt-3">${photo.date}</p>

    
      </div>
    </div>
  `;

  col.innerHTML = card;
  cardsContainer.appendChild(col);
}