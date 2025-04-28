const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;
const cardsContainer = document.getElementById('cards-container');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const overlayTitle = document.getElementById('overlay-title');
const overlayDate = document.getElementById('overlay-date');
const closeBtn = document.getElementById('close-btn');

let photos = [];

axios.get(apiUri)
  .then(response => {
    photos = response.data.slice(0, 10);
    photos.forEach((photo, index) => createCard(photo, index));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function createCard(photo, index) {
  const col = document.createElement('div');
  col.className = 'col-sm-10 col-md-5 col-lg-4 mb-4';

  const card = `
    <div class="card m-2 rounded-0">
      <div class="card-body m-2 rounded-0 position-relative">
        <div class="card-pin">
          <img src="./img/pin.svg" alt="pin" width="40">
        </div>
        <img src="${photo.url}" class="card-img rounded-0 card-image" alt="${photo.title}" data-index="${index}">
        <p class="card-text edu-tas-beginner mt-3">${photo.title}</p>
        <p class="card-text sometype-mono mt-3">${photo.date}</p>
      </div>
    </div>
  `;

  col.innerHTML = card;
  cardsContainer.appendChild(col);
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('card-image')) {
    const index = e.target.getAttribute('data-index');
    showOverlay(photos[index]);
  }
});

closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function(e) {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

function showOverlay(photo) {
  overlayImage.src = photo.url;
  overlayImage.alt = photo.title;
  overlayTitle.textContent = photo.title;
  overlayDate.textContent = photo.date;
  overlay.style.display = 'flex';
}