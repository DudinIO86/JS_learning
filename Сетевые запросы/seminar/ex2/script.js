const photoContainer = document.getElementById("photo-container");
let page = 10;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=WZAJsMq2RtVes8yAZbQIFsl3T3vQQnJHY35lfNnJgTY`
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const responseObj = await fetchPhotos();
  responseObj.forEach((photo) => {
    const photoElement = document.createElement("div");
    photoElement.classList.add("photo");
    const img = document.createElement("img");
    img.src = photo.urls.small;
    img.alt = photo.alt_description;
    photoElement.appendChild(img);
    photoContainer.appendChild(photoElement);
  });
}
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
    }
    });
loadMorePhotos();



